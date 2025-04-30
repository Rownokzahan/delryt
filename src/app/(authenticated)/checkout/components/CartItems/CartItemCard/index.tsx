"use client";

import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import { useCart } from "@/hooks/useCart";
import { LocalCartItem } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

interface CartItemCardProps {
  cartItem: LocalCartItem;
  index: number;
}

const CartItemCard = ({ cartItem, index }: CartItemCardProps) => {
  const { updateCartItemByIndex, removeFromCartByIndex } = useCart();
  const { quantity, price, product } = cartItem;

  const increaseQuantity = () => {
    updateCartItemByIndex(index, {
      ...cartItem,
      quantity: cartItem.quantity + 1,
    });
  };

  const decreaseQuantity = () => {
    if (cartItem.quantity <= 1) {
      removeFromCartByIndex(index);
      return;
    }

    updateCartItemByIndex(index, {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    });
  };

  return (
    <div className="py-3 flex items-center gap-3">
      <Image
        width={64}
        height={64}
        src={getImagePath("product", product.image)}
        alt={product.name}
        className="size-14 rounded-lg object-cover"
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
          <p className="text-end shrink-0">৳ {price}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-primary text-sm">Edit</p>

          <div className="h-7 rounded-sm bg-primary/10 font-medium flex items-center">
            <button
              onClick={decreaseQuantity}
              className="flex-1 px-1 text-primary"
            >
              <HiOutlineMinusSm />
            </button>
            <p className="px-1 text-sm">{quantity}</p>
            <button
              onClick={increaseQuantity}
              className="flex-1 px-1 text-primary"
            >
              <HiOutlinePlusSm />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
