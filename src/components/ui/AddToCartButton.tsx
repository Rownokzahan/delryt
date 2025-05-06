import { Product } from "@/types";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Button from "./Button";
import useModalById from "@/hooks/useModalById";
import { useCart } from "@/hooks/useCart";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { openModalWithData } = useModalById("productCustomizationModal");
  const {
    cart,
    addSimpleProductToCart,
    updateCartItemQuantity,
    removeLastCustomizedProduct,
  } = useCart();

  const isCustomizable = product.add_ons.length !== 0;

  const handleAddToCart = () => {
    if (isCustomizable) {
      openModalWithData({ mode: "add", product });
    } else {
      addSimpleProductToCart(product);
      toast.success("Added to cart");
    }
  };

  const incrementQuantity = () => {
    if (isCustomizable) {
      openModalWithData({ mode: "add", product });
    } else {
      updateCartItemQuantity({
        id: product.id,
        idType: "productId",
        action: "increment",
      });
    }
  };

  const decrementQuantity = () => {
    if (isCustomizable) {
      removeLastCustomizedProduct(product.id);
    } else {
      updateCartItemQuantity({
        id: product.id,
        idType: "productId",
        action: "decrement",
      });
    }
  };

  const getQuantityInCart = () => {
    if (isCustomizable) {
      const productEntries = cart.filter(
        (item) => item.productId === product.id
      );
      return productEntries.length;
    }

    const productInCart = cart.find((item) => item.productId === product.id);
    return productInCart?.quantity || 0;
  };

  const quantityInCart = getQuantityInCart();

  return (
    <div onClick={(e) => e.preventDefault()}>
      {quantityInCart ? (
        <div className="h-8 w-18 border border-primary rounded-sm flex items-center">
          <button
            onClick={decrementQuantity}
            className="h-full flex-1 place-items-center text-sm text-primary"
          >
            <FaMinus />
          </button>
          <span className="p-1">{quantityInCart}</span>
          <button
            onClick={incrementQuantity}
            className="h-full flex-1 place-items-center text-sm text-primary"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <Button
          onClick={handleAddToCart}
          variant="primary-outline"
          size="small"
          className="h-8 !w-18"
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
