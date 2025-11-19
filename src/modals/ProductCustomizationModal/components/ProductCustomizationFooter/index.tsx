import { useProductCustomization } from "../../ProductCustomizationProvider";
import useModalById from "@/hooks/useModalById";
import toast from "react-hot-toast";
import { useCartActions } from "@/stores/useCartStore";

const ProductCustomizationFooter = () => {
  const { totalPrice, product, selectedAddOns } = useProductCustomization();
  const { addCustomizedProduct, updateCartItemAddOns } = useCartActions();
  const { closeModal, modalData } = useModalById("productCustomizationModal");

  const saveCartItem = () => {
    if (!modalData) return;

    if (modalData.mode === "edit") {
      updateCartItemAddOns({
        cartId: modalData.cartId,
        totalPrice,
        selectedAddOns,
      });
      toast.success("Cart item updated");
    } else {
      addCustomizedProduct({ product, totalPrice, selectedAddOns });
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
