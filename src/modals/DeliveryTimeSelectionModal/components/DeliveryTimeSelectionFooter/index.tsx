"use client";

import { useCheckoutActions } from "@/stores/useCheckoutStore";
import { useSelectedTimeDate } from "../../SelectedTimeDateProvider";
import useModalById from "@/hooks/useModalById";

const DeliveryTimeSelectionFooter = () => {
  const { selectedDate, selectedTime } = useSelectedTimeDate();
  const { setDeliveryTime } = useCheckoutActions();
  const { closeModal } = useModalById("deliveryTimeSelectionModal");

  const getFormattedDeliveryText = () => {
    if (selectedTime === "now") return "Now";

    //check if selected date is today
    if (selectedDate.toDateString() === new Date().toDateString()) {
      return `By ${selectedTime}`;
    }

    return `By ${selectedDate.toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
    })}, ${selectedTime}`;
  };

  const handleChangeDateTime = () => {
    const deliveryText = getFormattedDeliveryText();

    setDeliveryTime({
      time: selectedTime,
      date: selectedDate.toISOString(),
      text: deliveryText,
    });

    closeModal();
  };

  return (
    <footer className="p-4 border-t">
      <button
        onClick={handleChangeDateTime}
        className="w-full py-3 rounded-md font-bold bg-primary text-center text-uiWhite"
      >
        Change Date & Time
      </button>
    </footer>
  );
};

export default DeliveryTimeSelectionFooter;
