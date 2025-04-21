"use client";

import {
  closeModalById,
  openModalById,
} from "@/store/features/modal/modalSlice";
import { RootState } from "@/store/store";
import { ModalId } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const useModalById = (modalId: ModalId) => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modalStatus[modalId]);

  const isModalOpen = !!modal?.isOpen;
  const modalData = modal?.data;

  // Open modal without data
  const openModal = () => dispatch(openModalById({ modalId }));

  // Open modal with data
  const openModalWithData = (data: unknown) =>
    dispatch(openModalById({ modalId, data }));

  const closeModal = () => dispatch(closeModalById(modalId));

  return {
    isModalOpen,
    modalData,
    openModal,
    openModalWithData,
    closeModal,
  };
};

export default useModalById;
