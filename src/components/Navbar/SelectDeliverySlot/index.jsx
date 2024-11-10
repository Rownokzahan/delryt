import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import DeliverySlotModal from "@/components/modals/DeliverySlotModal";

const SelectDeliverySlot = () => {
  // State for managing modal open/close status
  const [isDeliverySlotModalOpen, setIsDeliverySlotModalOpen] = useState(false);

  // State for storing selected delivery time
  const [deliveryTime, setDeliveryTime] = useState("Now");

  // Function to open the modal
  const openModal = () => setIsDeliverySlotModalOpen(true);
  // Function to close the modal
  const closeModal = () => setIsDeliverySlotModalOpen(false);

  return (
    <>
      {/* Button to trigger delivery slot selection */}
      <div className="bg-[#fff5f0] py-2">
        <button onClick={openModal} className="ui-container">
          <div className="flex items-center border-primary border rounded-md w-max overflow-hidden">
            {/* Delivery icon and label */}
            <div className="flex items-center gap-1 bg-[#a09cff47]/50 p-2 text-primary">
              <MdOutlineDeliveryDining />
              <span className="text-xs font-medium">Delivery</span>
            </div>

            {/* Selected delivery time display */}
            <div className="flex items-center gap-2 border-primary border-s bg-white p-2">
              <span className="text-xs font-medium">{deliveryTime}</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </div>
        </button>
      </div>

      {/* Delivery Slot Modal */}
      <DeliverySlotModal
        isModalOpen={isDeliverySlotModalOpen}
        closeModal={closeModal}
        setDeliveryTime={setDeliveryTime}
      />
    </>
  );
};

export default SelectDeliverySlot;
