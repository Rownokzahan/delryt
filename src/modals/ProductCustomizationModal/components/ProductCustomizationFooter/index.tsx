import { useCart } from "@/hooks/useCart";
import { useProductCustomization } from "../../ProductCustomizationProvider";
import { LocalCartItem } from "@/types";
import useModalById from "@/hooks/useModalById";
import toast from "react-hot-toast";

const ProductCustomizationFooter = () => {
  const { totalPrice, product, selectedAddOns } = useProductCustomization();
  const { addCustomProductToCart, updateCartItemByIndex } = useCart();
  const { closeModal, modalData } = useModalById("productCustomizationModal");

  const saveCartItem = () => {
    if (!modalData) return;

    const quantity = modalData.mode === "edit" ? modalData.quantity : 1;

    if (modalData.mode === "edit") {
      // updateCartItemByIndex(modalData, cartItemIndex, newCartItem);
      toast.success("Cart item updated");
    } else {
      addCustomProductToCart(product, totalPrice, selectedAddOns);
      toast.success("Added to cart");
    }

    closeModal();
  };

  return (
    <div className="sticky bottom-0">
      <button
        onClick={saveCartItem}
        className="w-full p-4 bg-primary font-medium text-white flex items-center justify-between"
      >
        <p>৳ {totalPrice}</p>
        <p>{modalData?.mode === "edit" ? "Update Item" : "Add Item"}</p>
      </button>
    </div>
  );
};

export default ProductCustomizationFooter;
