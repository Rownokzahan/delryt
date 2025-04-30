"use client";

import { MdDeliveryDining } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import useModalById from "@/hooks/useModalById";
import useCheckoutStates from "@/hooks/useCheckoutStates";

const ChangeDeliveryTime = () => {
  const { openModal } = useModalById("deliveryTimeSelectionModal");
  const { deliveryTime } = useCheckoutStates();

  return (
    <button
      onClick={openModal}
      className="w-full p-3 rounded-lg bg-uiWhite flex items-center gap-2 relative"
    >
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full border border-primary/20 bg-primary/10 text-primary flex items-center justify-center">
          <MdDeliveryDining className="text-xl" />
        </div>
        <p className="font-medium text-sm md:text-base">Delivery</p>
      </div>

      <div className="flex-1 ps-2 border-s flex items-center justify-between gap-2">
        <p className="font-medium text-sm md:text-base">{deliveryTime.text}</p>
        <IoIosArrowDropdown className="shrink-0 text-xl text-primary" />
      </div>

      {/* Bottom Connector Line */}
      <span className="h-5 border border-dashed border-s border-uiBlack-light/30 absolute top-full left-6" />
    </button>
  );
};

export default ChangeDeliveryTime;
