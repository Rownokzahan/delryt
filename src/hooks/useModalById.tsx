"use client";

import {
  closeModalById,
  openModalById,
} from "@/store/features/modal/modalSlice";
import { RootState } from "@/store/store";
import { ModalDataMap, ModalId } from "@/types/modal";
import { useDispatch, useSelector } from "react-redux";

const useModalById = <T extends ModalId>(modalId: T) => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modalStatus[modalId]);

  const isModalOpen = !!modal?.isOpen;
  const modalData = modal?.data;

  const openModal = () => {
    dispatch(openModalById({ modalId, data: undefined }));
  };

  const openModalWithData = (data: ModalDataMap[T]) => {
    dispatch(openModalById({ modalId, data }));
  };

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
