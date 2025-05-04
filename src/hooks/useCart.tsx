import { useDispatch, useSelector } from "react-redux";
import { LocalCartItem } from "@/types";
import {
  initializeCart as initializeCartAction,
  addToCart as addToCartAction,
  removeFromCartByIndex as removeFromCartByIndexAction,
  updateCartItemByIndex as updateCartItemByIndexAction,
  clearCart as clearCartAction,
} from "@/store/features/cart/cartSlice";
import { selectCart, selectCartTotal } from "@/store/features/cart/cartSelectors";

export const useCart = () => {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const initializeCart = () => {
    dispatch(initializeCartAction());
  };

  const addToCart = (cartItem: LocalCartItem) => {
    dispatch(addToCartAction(cartItem));
  };

  const removeFromCartByIndex = (cartItemIndex: number) => {
    dispatch(removeFromCartByIndexAction(cartItemIndex));
  };

  const updateCartItemByIndex = (
    cartItemIndex: number,
    cartItem: LocalCartItem
  ) => {
    dispatch(
      updateCartItemByIndexAction({ index: cartItemIndex, item: cartItem })
    );
  };

  const clearCart = () => {
    dispatch(clearCartAction());
  };

  return {
    cart,
    cartTotal,
    initializeCart,
    addToCart,
    removeFromCartByIndex,
    updateCartItemByIndex,
    clearCart,
  };
};
