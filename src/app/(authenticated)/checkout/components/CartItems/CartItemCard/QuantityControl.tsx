import { useCart } from "@/hooks/useCart";
import { LocalCartItem } from "@/types";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

interface QuantityControlProps {
  cartItem: LocalCartItem;
}

const QuantityControl = ({ cartItem }: QuantityControlProps) => {
  const { updateCartItemQuantity } = useCart();

  const { id, quantity } = cartItem;

  const increaseQuantity = () => {
    updateCartItemQuantity({ id, idType: "cartItemId", action: "increment" });
  };

  const decreaseQuantity = () => {
    updateCartItemQuantity({ id, idType: "cartItemId", action: "decrement" });
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
