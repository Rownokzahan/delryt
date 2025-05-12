"use client"

import useCheckoutState from "@/hooks/useCheckoutState";
import useModalById from "@/hooks/useModalById";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";

const SelectDeliverySlotSection = () => {
  const { deliveryTime } = useCheckoutState();;
  const { openModal } = useModalById("deliveryTimeSelectionModal");

  return (
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
          <div className="h-full ps-3 pe-2 rounded-e-md flex items-center gap-2 bg-white">
            <span className="text-xs text-nowrap">{deliveryTime.text}</span>
            <IoIosArrowDown className="text-primary" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SelectDeliverySlotSection;
