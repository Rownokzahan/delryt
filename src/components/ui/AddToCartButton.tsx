import { LocalCartItem, Product } from "@/types";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Button from "./Button";
import useModalById from "@/hooks/useModalById";
import { useCart } from "@/hooks/useCart";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { openModalWithData } = useModalById("productCustomizationModal");
  const { cart, addToCart, updateCartItemByIndex, removeFromCartByIndex } =
    useCart();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (product.add_ons.length !== 0) {
      openModalWithData({ product });
      return;
    }

    const cartItem: LocalCartItem = {
      productId: product.id,
      price: product.price,
      discounted_price: 0,
      tax_amount: 0,
      quantity: 1,
      variation: [],
      selectedAddOns: [],
      product,
    };

    addToCart(cartItem);
  };

  const productIndexInCart = cart.findIndex(
    (cartItem) => cartItem.productId === product.id
  );

  const productInCart =
    productIndexInCart !== -1 ? cart[productIndexInCart] : undefined;

  const incrementQuantity = () => {
    if (!productInCart) return;

    updateCartItemByIndex(productIndexInCart, {
      ...productInCart,
      quantity: productInCart.quantity + 1,
    });
  };

  const decrementQuantity = () => {
    if (!productInCart) return;

    if (productInCart.quantity <= 1) {
      removeFromCartByIndex(productIndexInCart);
      return;
    }

    updateCartItemByIndex(productIndexInCart, {
      ...productInCart,
      quantity: productInCart.quantity - 1,
    });
  };

  return (
    <div onClick={(e) => e.preventDefault()}>
      {productInCart ? (
        <div className="h-8 w-18 border border-primary rounded-sm flex items-center">
          <button
            onClick={decrementQuantity}
            className="h-full flex-1 place-items-center text-sm text-primary"
          >
            <FaMinus />
          </button>
          <span className="p-1">{productInCart.quantity}</span>
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
