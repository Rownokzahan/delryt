"use client";

import { MdAccessTime } from "react-icons/md";
import InfoCard from "./InfoCard";
import useModalById from "@/hooks/useModalById";
import { useDeliveryTime } from "@/stores/useCheckoutStore";

const DeliveryTime = () => {
  const { openModal } = useModalById("deliveryTimeSelectionModal");
  const deliveryTime = useDeliveryTime();

  return (
    <InfoCard
      Icon={MdAccessTime}
      label="Delivery Time"
      onArrowButtonClick={openModal}
    >
      <p className="text-sm">{deliveryTime.text}</p>
    </InfoCard>
  );
};

export default DeliveryTime;
