import { useCart } from "@/hooks/useCart";
import { useProductCustomization } from "../../ProductCustomizationProvider";
import { LocalCartItem } from "@/types";

const ProductCustomizationFooter = () => {
  const { totalPrice, product, selectedAddOns } = useProductCustomization();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const newCartItem: LocalCartItem = {
      productId: product.id,
      price: totalPrice,
      discounted_price: 0,
      tax_amount: 0,
      quantity: 1,
      variation: [],
      selectedAddOns,
      product,
    };

    addToCart(newCartItem);
  };

  return (
    <div className="sticky bottom-0">
      <button
        onClick={handleAddToCart}
        className="w-full p-4 bg-primary font-medium text-white flex items-center justify-between"
      >
        <p>৳ {totalPrice}</p>
        <p>Add Item</p>
      </button>
    </div>
  );
};

export default ProductCustomizationFooter;
