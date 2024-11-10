import { useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = ({
  isModalOpen,
  closeModal,
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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="w-full sm:w-[500px] max-w-full max-h-screen h-screen sm:h-auto overflow-y-auto fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white"
      >
        <div className="p-2 pb-0 text-end">
          {/* Modal Close Button */}
          <button onClick={closeModal} className="text-2xl text-ui-gray">
            <HiXMark />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
