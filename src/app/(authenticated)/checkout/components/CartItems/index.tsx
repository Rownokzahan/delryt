import { useCart } from "@/hooks/useCart";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  const { cart } = useCart();

  return (
    <div className="px-3 py-1 rounded-lg bg-uiWhite divide-y">
      {cart?.map((cartItem) => (
        <CartItemCard key={cartItem?.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItems;
