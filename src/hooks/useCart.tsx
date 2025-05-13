import { useDispatch, useSelector } from "react-redux";
import { Id, Product, SelectedAddOnItem } from "@/types";
import {
  initializeCart as initializeCartAction,
  addSimpleProductToCart as addSimpleProductToCartAction,
  updateCartItemQuantity as updateCartItemQuantityAction,
  updateCartItem as updateCartItemAction,
  removeLastCustomizedProduct as removeLastCustomizedProductAction,
  addCustomProductToCart as addCustomProductToCartAction,
} from "@/store/features/cart/cartSlice";
import {
  selectCart,
  selectCartTotal,
} from "@/store/features/cart/cartSelectors";
import useCheckoutState from "./useCheckoutState";

export const useCart = () => {
  const dispatch = useDispatch();
  const { appliedCoupon, removeCoupon } = useCheckoutState();

  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);

  // Initialize cart stat
  const initializeCart = () => {
    dispatch(initializeCartAction());
  };

  // Add a simple product to the cart
  const addSimpleProductToCart = (product: Product) => {
    dispatch(addSimpleProductToCartAction(product));
  };

  // Add a customized product with add-ons to the cart
  const addCustomProductToCart = (
    product: Product,
    totalPrice: number,
    selectedAddOns: SelectedAddOnItem[]
  ) => {
    dispatch(
      addCustomProductToCartAction({ product, totalPrice, selectedAddOns })
    );
  };

  // Update item quantity (increment/decrement) in the cart
  const updateCartItemQuantity = ({
    id,
    idType,
    action,
  }: {
    id: Id;
    idType: "productId" | "cartItemId";
    action: "increment" | "decrement";
  }) => {
    dispatch(
      updateCartItemQuantityAction({
        id,
        idType,
        action,
      })
    );

    if (appliedCoupon.coupon !== null) {
      removeCoupon();
    }
  };

  // Update a cart item (customized) with new add-ons or pricing
  const updateCartItem = ({
    cartId,
    totalPrice,
    selectedAddOns,
  }: {
    cartId: Id;
    totalPrice: number;
    selectedAddOns: SelectedAddOnItem[];
  }) => {
    dispatch(
      updateCartItemAction({
        cartId,
        totalPrice,
        selectedAddOns,
      })
    );

    if (appliedCoupon.coupon !== null) {
      removeCoupon();
    }
  };

  // Remove the last customized version of a specific product
  const removeLastCustomizedProduct = (productId: Id) => {
    dispatch(removeLastCustomizedProductAction(productId));
  };

  return {
    cart,
    cartTotal,
    initializeCart,
    addSimpleProductToCart,
    addCustomProductToCart,
    updateCartItemQuantity,
    updateCartItem,
    removeLastCustomizedProduct,
  };
};
