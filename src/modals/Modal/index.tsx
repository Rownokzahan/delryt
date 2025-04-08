"use client";

import useModalById from "@/hooks/useModalById";
import { ModalId } from "@/types";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  modalId: ModalId;
  children: React.ReactNode;
  containerClasses?: string;
  closeOnOutsideClick?: boolean;
  disableScroll?: boolean;
  fullHeightOnSmall?: boolean;
}

const Modal = ({
  modalId,
  children,
  containerClasses = "",
  closeOnOutsideClick = true,
  disableScroll = true,
  fullHeightOnSmall = false,
}: ModalProps) => {
  const { isModalOpen, closeModal } = useModalById(modalId);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only attach event listener if closeOnOutsideClick is true
    if (closeOnOutsideClick) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          closeModal();
        }
      };

      // Add event listener to detect outside clicks
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup the event listener when the component unmounts
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [closeModal, closeOnOutsideClick]);

  useEffect(() => {
    // Disable body scroll if disableScroll is true and modal is open
    if (isModalOpen && disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Ensure cleanup to avoid side effects
    };
  }, [isModalOpen, disableScroll]);

  if (!isModalOpen) return null;

  return (
    <div
      className={clsx(
        "fixed z-50 inset-0 bg-black/60 backdrop-blur-xs",
        "flex items-end sm:items-center justify-center"
      )}
    >
      {/* Modal container */}
      <div ref={modalRef} className="w-full max-w-[500px] relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className={clsx(
            "size-5 sm:size-6 rounded-full text-lg bg-uiWhite",
            "flex justify-center items-center",
            "absolute right-2 top-1 sm:top-0 sm:-right-8"
          )}
        >
          <FaXmark />
        </button>

        <div
          className={clsx(
            fullHeightOnSmall && "h-[calc(100dvh-32px)] sm:h-auto",
            "max-h-[calc(100dvh-32px)] overflow-y-auto overflow-x-hidden mt-8 sm:mt-0 bg-uiWhite",
            containerClasses
          )}
        >
          {/* Modal content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
