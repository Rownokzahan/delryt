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

  // Overloads section: Here we define two function signatures for openModal
  // 1. openModal(data) for modals that require data
  function openModal(data: ModalDataMap[T]): void;

  // 2. Second overload: If the modal does NOT require data (i.e., ModalDataMap[T] is undefined),
  // `openModal` can be called without any arguments. This overload ensures type safety.
  function openModal(): T extends keyof ModalDataMap
    ? ModalDataMap[T] extends undefined
      ? void // If the modal doesn't expect data, it accepts no argument.
      : never // If the modal expects data but we try calling openModal() with no data, this results in a TypeScript error (never).
    : void;

  // Implementation: dispatch action to open modal (with or without data)
  function openModal(data?: ModalDataMap[T]) {
    dispatch(
      openModalById({
        modalId,
        data,
      })
    );
  }

  const closeModal = () => dispatch(closeModalById(modalId));

  return {
    isModalOpen,
    modalData,
    openModal,
    closeModal,
  };
};

export default useModalById;
