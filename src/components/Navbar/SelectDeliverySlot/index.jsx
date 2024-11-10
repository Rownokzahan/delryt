import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import DeliverySlotModal from "../../modals/DeliverySlotModal";
import { getNext15Days } from "../../modals/DeliverySlotModal/utils/dateTimeHelpers";

const SelectDeliverySlot = () => {
  const [isDeliverySlotModalOpen, setIsDeliverySlotModalOpen] = useState(false);

  const [selectedSlot, setSelectedSlot] = useState({
    ...getNext15Days()[0],
    time: "Now",
  });

  const openModal = () => setIsDeliverySlotModalOpen(true);
  const closeModal = () => setIsDeliverySlotModalOpen(false);

  return (
    <>
      <div className="bg-[#fff5f0] py-2">
        <div onClick={openModal} className="ui-container cursor-pointer">
          <div className="flex items-center border-primary border rounded-md w-max overflow-hidden">
            <div className="flex items-center gap-1 bg-[#a09cff47]/50 p-2 text-primary">
              <MdOutlineDeliveryDining />
              <span className="text-sm font-medium">Delivery</span>
            </div>

            <div className="flex items-center gap-2 border-primary border-s bg-white p-2 ps-3">
              <span className="text-sm font-medium">Now</span>
              <IoIosArrowDown className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <DeliverySlotModal
        isModalOpen={isDeliverySlotModalOpen}
        closeModal={closeModal}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
    </>
  );
};

export default SelectDeliverySlot;
