"use client";

import { GoXCircle } from "react-icons/go";
import TipButton from "./TipButton";
import clsx from "clsx";
import useModalById from "@/hooks/useModalById";
import useCheckoutStates from "@/hooks/useCheckoutStates";

const TipSelection = () => {
  const { deliveryTip, resetDeliveryTipAmount } = useCheckoutStates();
  const { openModal } = useModalById("customTipModal");

  const { amount, suggestedOptions } = deliveryTip;

  // Determines if the selected tip is a custom amount (not in suggested options).
  const isCustomAmount =
    amount !== null &&
    !suggestedOptions.some((option) => option.amount === amount);

  return (
    <div className="mt-4 grid grid-cols-4 gap-2">
      {suggestedOptions.map((option, index) => (
        <TipButton key={index} option={option} />
      ))}

      {/* Opens the custom tip modal or resets the tip if a custom amount is selected */}
      <button
        onClick={isCustomAmount ? resetDeliveryTipAmount : openModal}
        className={clsx(
          "w-full py-2 border rounded-md text-center text-sm",
          "flex items-center justify-center gap-2",
          isCustomAmount && "border-primary bg-primary/[0.02]"
        )}
      >
        <span>{isCustomAmount ? `₹${amount}` : "Custom"}</span>
        {isCustomAmount && <GoXCircle className="text-primary text-lg" />}
      </button>
    </div>
  );
};

export default TipSelection;
