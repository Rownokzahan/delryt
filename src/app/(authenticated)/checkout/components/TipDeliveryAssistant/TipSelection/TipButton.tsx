"use client";

import useCheckoutStates from "@/hooks/useCheckoutStates";
import clsx from "clsx";
import { GoXCircle } from "react-icons/go";

interface TipButtonProps {
  option: {
    text: string;
    amount: number;
    is_most_tipped: boolean;
  };
}

const TipButton = ({ option }: TipButtonProps) => {
  const { text, amount, is_most_tipped } = option || {};
  const { deliveryTip, updateDeliveryTipAmount, resetDeliveryTipAmount } =
    useCheckoutStates();

  const isSelected = deliveryTip.amount === amount;

  const handleButtonClick = () => {
    if (isSelected) {
      resetDeliveryTipAmount();
    } else {
      updateDeliveryTipAmount(amount);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={clsx(
        "w-full py-2 border rounded-md text-center text-sm relative flex items-center justify-center gap-2",
        isSelected && "border-primary bg-primary/[0.02]"
      )}
    >
      <span>{text}</span>

      {isSelected && <GoXCircle className="text-primary text-lg" />}

      {deliveryTip.amount === null && is_most_tipped && (
        <div className="bg-uiWhite rounded-t-sm w-[calc(100%+4px)] absolute bottom-[calc(100%-6px)] left-1/2 -translate-x-1/2">
          <p className="px-2 rounded-t-sm bg-primary/5 uppercase text-[7px] leading-3 text-primary/80 text-nowrap font-medium">
            Most Tipped
          </p>
        </div>
      )}
    </button>
  );
};

export default TipButton;
