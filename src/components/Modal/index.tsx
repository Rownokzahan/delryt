import clsx from "clsx";
import React, { FC, useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  header?: React.ReactNode;
  headerClasses?: string;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  disableScroll?: boolean;
}

const Modal: FC<ModalProps> = ({
  isModalOpen,
  closeModal,
  header = null,
  headerClasses,
  children,
  closeOnOutsideClick = false,
  disableScroll = false,
}) => {
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
    <>
      <div className={"fixed z-50 inset-0 bg-black/60 backdrop-blur-sm"}>
        {/* Modal container */}
        <div
          ref={modalRef}
          className={clsx(
            "w-full max-w-[500px] h-screen sm:h-auto bg-white",
            "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          )}
        >
          <div className="max-h-screen overflow-y-auto">
            <div className={clsx("flex justify-between gap-2", headerClasses)}>
              {/* Modal header */}
              <div>{header && header}</div>

              {/* Modal Close Button */}
              <button
                onClick={closeModal}
                className={clsx(
                  "size-6 rounded-full text-2xl sm:text-lg flex-shrink-0 flex justify-center items-center",
                  "sm:absolute top-0 left-[calc(100%+10px)] bg-white"
                )}
              >
                <FaXmark />
              </button>
            </div>

            {/* Modal content */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
