import { useCart } from "@/hooks/useCart";
import { LocalCartItem } from "@/types";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

interface QuantityControlProps {
  cartItem: LocalCartItem;
  cartItemIndex: number;
}

const QuantityControl = ({ cartItem, cartItemIndex }: QuantityControlProps) => {
  const { updateCartItemByIndex, removeFromCartByIndex } = useCart();

  const { quantity } = cartItem;

  const increaseQuantity = () => {
    updateCartItemByIndex(cartItemIndex, {
      ...cartItem,
      quantity: quantity + 1,
    });
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      removeFromCartByIndex(cartItemIndex);
      return;
    }

    updateCartItemByIndex(cartItemIndex, {
      ...cartItem,
      quantity: quantity - 1,
    });
  };

  return (
    <div className="ml-auto h-7 rounded-sm bg-primary/10 font-medium flex items-center">
      <button onClick={decreaseQuantity} className="flex-1 px-1 text-primary">
        <HiOutlineMinusSm />
      </button>

      <p className="px-1 text-sm">{quantity}</p>

      <button onClick={increaseQuantity} className="flex-1 px-1 text-primary">
        <HiOutlinePlusSm />
      </button>
    </div>
  );
};

export default QuantityControl;
