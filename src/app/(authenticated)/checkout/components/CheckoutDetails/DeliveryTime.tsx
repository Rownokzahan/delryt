"use client";

import { MdAccessTimeFilled } from "react-icons/md";
import InfoCard from "./InfoCard";
import useModalById from "@/hooks/useModalById";
import useCheckoutStates from "@/hooks/useCheckoutStates";

const DeliveryTime = () => {
  const { openModal } = useModalById("deliveryTimeSelectionModal");
  const { deliveryTime } = useCheckoutStates();

  return (
    <InfoCard
      Icon={MdAccessTimeFilled}
      label="Delivery Time"
      onArrowButtonClick={openModal}
    >
      <p className="text-sm">{deliveryTime.text}</p>
    </InfoCard>
  );
};

export default DeliveryTime;
