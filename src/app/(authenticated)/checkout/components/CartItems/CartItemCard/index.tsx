"use client";

import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import { LocalCartItem } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import QuantityControl from "./QuantityControl";
import CustomizationInfo from "./CustomizationInfo";

interface CartItemCardProps {
  cartItem: LocalCartItem;
}

const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  const { quantity, price, product } = cartItem || {};

  return (
    <div className="py-3 flex items-center gap-3">
      <Image
        width={64}
        height={64}
        src={getImagePath("product", product.image)}
        alt={product.name}
        className="size-14 rounded-md object-cover"
      />

      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex items-start justify-between gap-4 text-sm font-medium">
          <p className="truncate">
            <VegNonVegIcon
              isVeg={product.product_type === "veg"}
              className="size-3! -mt-px me-1"
            />
            {product.name}
          </p>

          <p className="text-end shrink-0">৳ {price * quantity}</p>
        </div>

        <div className="flex items-center gap-2">
          <CustomizationInfo
            cartItem={cartItem}
          />
          <QuantityControl cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
