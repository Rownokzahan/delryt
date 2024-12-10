import clsx from "clsx";
import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

const Modal = ({
  isModalOpen,
  closeModal,
  header = null,
  headerClasses,
  children,
  closeOnOutsideClick = false,
  disableScroll = false,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Only attach event listener if closeOnOutsideClick is true
    if (closeOnOutsideClick) {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
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

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, disableScroll]);

  if (!isModalOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className={"fixed z-50 inset-0 bg-black/60 backdrop-blur-sm"}>
        {/* Modal */}
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

            <>{children}</>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
