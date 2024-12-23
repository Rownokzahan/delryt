import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import DeliverySlotModal from "./DeliverySlotModal";

const SelectDeliverySlot = () => {
  const [isDeliverySlotModalOpen, setIsDeliverySlotModalOpen] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("Now");

  // Functions to open and close the modal
  const openModal = () => setIsDeliverySlotModalOpen(true);
  const closeModal = () => setIsDeliverySlotModalOpen(false);

  const handleSetDeliveryTime = (time: string) => {
    setDeliveryTime(time);
  };

  return (
    <>
      {/* Button to trigger delivery slot selection */}
      <div className="border-t border-primary/5 py-3">
        <div className="ui-container">
          <button
            onClick={openModal}
            className="h-9 border-primary border rounded-md flex items-center divide-x divide-primary"
          >
            {/* Delivery icon and label */}
            <div className="h-full px-2 flex items-center gap-1 bg-primary/10 text-primary">
              <MdOutlineDeliveryDining />
              <span className="text-xs font-medium">Delivery</span>
            </div>

            {/* Selected delivery time display */}
            <div className="h-full ps-3 pe-2 border-s border-primary rounded-e-md flex items-center gap-2 bg-white">
              <span className="text-xs">{deliveryTime}</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </button>
        </div>
      </div>

      {/* Delivery Slot Modal */}
      <DeliverySlotModal
        isModalOpen={isDeliverySlotModalOpen}
        closeModal={closeModal}
        handleSetDeliveryTime={handleSetDeliveryTime}
      />
    </>
  );
};

export default SelectDeliverySlot;
