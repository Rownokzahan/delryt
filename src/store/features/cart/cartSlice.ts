import { Id, LocalCartItem, Product, SelectedAddOnItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStoredCart, storeCart } from "./cartStorage";
import { v4 as uuidv4 } from "uuid";

// Initial state
const initialState: LocalCartItem[] = [];

// Redux slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: () => {
      if (typeof window === "undefined") return [];
      return getStoredCart();
    },

    addSimpleProductToCart: (state, { payload }: PayloadAction<Product>) => {
      const product = payload;

      const newCartItem: LocalCartItem = {
        id: uuidv4(), // Generate unique ID
        productId: product.id,
        price: product.price,
        discounted_price: 0,
        tax_amount: 0,
        quantity: 1,
        variation: [],
        selectedAddOns: [],
        product,
      };

      state.push(newCartItem);
      storeCart(state);
    },

    addCustomProductToCart: (
      state,
      {
        payload,
      }: PayloadAction<{
        product: Product;
        totalPrice: number;
        selectedAddOns: SelectedAddOnItem[];
      }>
    ) => {
      const { product, totalPrice, selectedAddOns } = payload;

      const newCartItem: LocalCartItem = {
        id: uuidv4(), // Generate unique ID
        productId: product.id,
        price: totalPrice,
        discounted_price: 0,
        tax_amount: 0,
        quantity: 1,
        variation: [],
        selectedAddOns,
        product,
      };

      state.push(newCartItem);
      storeCart(state);
    },

    removeLastCustomizedProduct: (state, { payload }: PayloadAction<Id>) => {
      const productId = payload;

      const lastItem = state
        .filter((item) => item.productId === productId)
        .at(-1);

      if (!lastItem) {
        return state;
      }

      const updatedCart = state.filter((item) => item.id !== lastItem.id);
      storeCart(updatedCart);
      return updatedCart;
    },

    updateCartItemQuantity: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: Id;
        idType: "cartItemId" | "productId";
        action: "increment" | "decrement";
      }>
    ) => {
      const { id, idType, action } = payload;

      const isMatch = (item: LocalCartItem) => {
        return idType === "cartItemId" ? item.id === id : item.productId === id;
      };

      if (action === "increment") {
        const updatedCart = state.map((item) =>
          isMatch(item) ? { ...item, quantity: item.quantity + 1 } : item
        );
        storeCart(updatedCart);
        return updatedCart;
      }

      // action === "decrement"
      const targetItem = state.find((item) => isMatch(item));
      if (!targetItem) return state;

      if (targetItem.quantity === 1) {
        // remove the item from cart
        const updatedCart = state.filter((item) => !isMatch(item));
        storeCart(updatedCart);
        return updatedCart;
      }

      const updatedCart = state.map((item) =>
        isMatch(item) ? { ...item, quantity: item.quantity - 1 } : item
      );
      storeCart(updatedCart);
      return updatedCart;
    },

    updateCartItem: (
      state,
      {
        payload,
      }: PayloadAction<{
        cartId: Id;
        totalPrice: number;
        selectedAddOns: SelectedAddOnItem[];
      }>
    ) => {
      const { cartId, totalPrice, selectedAddOns } = payload;

      const updatedCart = state.map((item) =>
        item.id === cartId
          ? { ...item, price: totalPrice, selectedAddOns }
          : item
      );

      storeCart(updatedCart);
      return updatedCart;
    },
  },
});

export const {
  initializeCart,
  addSimpleProductToCart,
  addCustomProductToCart,
  removeLastCustomizedProduct,
  updateCartItemQuantity,
  updateCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
