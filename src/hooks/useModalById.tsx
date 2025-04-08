"use client"

import { closeModalById, openModalById } from "@/store/modal/modalSlice";
import { RootState } from "@/store/store";
import { ModalId } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const useModalById = (modalId: ModalId) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state: RootState) => state.modalStatus);

  const openModal = () => dispatch(openModalById(modalId));
  const closeModal = () => dispatch(closeModalById(modalId));

  return {
    openModal,
    closeModal,
    isModalOpen: !!modalStatus[modalId],
  };
};

export default useModalById;
