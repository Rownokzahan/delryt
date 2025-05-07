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

export const useCart = () => {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const initializeCart = () => {
    dispatch(initializeCartAction());
  };

  const addSimpleProductToCart = (product: Product) => {
    dispatch(addSimpleProductToCartAction(product));
  };

  const addCustomProductToCart = (
    product: Product,
    totalPrice: number,
    selectedAddOns: SelectedAddOnItem[]
  ) => {
    dispatch(
      addCustomProductToCartAction({ product, totalPrice, selectedAddOns })
    );
  };

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
  };

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
  };

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
