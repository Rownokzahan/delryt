import { Product } from "@/types";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Button from "./Button";
import useModalById from "@/hooks/useModalById";
import { useCart } from "@/hooks/useCart";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: Product;
  isStockOut: boolean;
}

const AddToCartButton = ({ product, isStockOut }: AddToCartButtonProps) => {
  const { openModalWithData } = useModalById("productCustomizationModal");
  const {
    cart,
    addSimpleProductToCart,
    updateCartItemQuantity,
    removeLastCustomizedProduct,
  } = useCart();

  const isCustomizable = product.add_ons.length !== 0;

  // Get quantity of the product in cart
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

  // Handle initial add to cart
  const handleAddToCart = () => {
    if (isStockOut) {
      return;
    }

    if (isCustomizable) {
      openModalWithData({ mode: "add", product });
      return;
    }

    addSimpleProductToCart(product);
    toast.success("Added to cart");
  };

  // Handle quantity increment
  const incrementQuantity = () => {
    if (isCustomizable) {
      openModalWithData({ mode: "add", product });
      return;
    }

    updateCartItemQuantity({
      id: product.id,
      idType: "productId",
      action: "increment",
    });
  };

  // Handle quantity decrement
  const decrementQuantity = () => {
    if (isCustomizable) {
      removeLastCustomizedProduct(product.id);
      return;
    }

    updateCartItemQuantity({
      id: product.id,
      idType: "productId",
      action: "decrement",
    });
  };

  // Render "Add" button if not in cart
  if (!quantityInCart) {
    return (
      <Button
        onClick={handleAddToCart}
        variant="primary-outline"
        size="small"
        className="h-8 !w-18"
        disabled={isStockOut}
      >
        Add
      </Button>
    );
  }

  // Render quantity control if already in cart
  return (
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
  );
};

export default AddToCartButton;
