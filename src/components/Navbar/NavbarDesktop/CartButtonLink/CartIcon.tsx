import { useCart } from "@/hooks/useCart";
import { FiShoppingCart } from "react-icons/fi";

const CartIcon = () => {
  const { cart } = useCart();

  return (
    <span className="flex flex-col items-center relative">
      <FiShoppingCart className="text-xl" />
      <span className="text-xs">Cart</span>

      {cart.length > 0 && (
        <span className="size-[15px] bg-primary rounded-full grid place-items-center absolute -top-1 -right-2 text-[10px] text-uiWhite">
          {cart.length}
        </span>
      )}
    </span>
  );
};

export default CartIcon;
