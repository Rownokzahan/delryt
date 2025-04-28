"use client";

import { MdDeliveryDining } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import useModalById from "@/hooks/useModalById";
import useDeliveryTime from "@/hooks/useDeliveryTime";

const ChangeDeliveryTime = () => {
  const { openModal } = useModalById("deliverySlotModal");
  const { deliveryTime } = useDeliveryTime();

  return (
    <button
      onClick={openModal}
      className="w-full p-3 rounded-lg bg-uiWhite flex items-center gap-2"
    >
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full border border-primary/20 bg-primary/10 text-primary flex items-center justify-center">
          <MdDeliveryDining className="text-xl" />
        </div>
        <p className="font-medium text-sm sm:text-base">Delivery</p>
      </div>

      <div className="flex-1 ps-2 border-s flex items-center justify-between gap-2">
        <p className="font-medium text-sm sm:text-base">{deliveryTime.value}</p>
        <IoIosArrowDropdown className="shrink-0 text-xl text-primary" />
      </div>
    </button>
  );
};

export default ChangeDeliveryTime;
