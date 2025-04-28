"use client"

import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

const CartItemCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev)); // Prevent quantity from going below 1
  };

  return (
    <div className="space-y-3 pt-3">
      <p className="font-medium">Sweet Truth</p>

      <div className="flex items-end justify-between gap-4 text-sm font-medium">
        <p>
          <VegNonVegIcon isVeg={true} className="size-3! -mt-px me-1" />
          Special Cranberry Cheesecake Slice
        </p>
        <p className="text-end">₹199</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-uiBlack-light text-sm">No customisation available</p>

        <div className="border border-primary rounded-sm bg-primary/10 font-medium flex items-center">
          <button
            onClick={decreaseQuantity}
            className="px-2 py-[6px] text-primary"
          >
            <HiOutlineMinusSm />
          </button>
          <p className="px-1">{quantity}</p>
          <button
            onClick={increaseQuantity}
            className="px-2 py-[6px] text-primary"
          >
            <HiOutlinePlusSm />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
