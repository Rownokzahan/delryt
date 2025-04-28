import CartItemCard from "./CartItemCard";

const CartItems = () => {
  return (
    <div className="px-3 pb-3 rounded-lg bg-uiWhite divide-y space-y-3">
      {[...Array(3)].map((_, index) => (
        <CartItemCard key={index} />
      ))}
    </div>
  );
};

export default CartItems;