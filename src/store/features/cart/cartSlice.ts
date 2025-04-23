import { LocalCartItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStoredCart, removeStoredCart, storeCart } from "./cartStorage";

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

    addToCart: (state, { payload }: PayloadAction<LocalCartItem>) => {
      state.push(payload);
      storeCart(state);
    },

    removeFromCartByIndex: (state, { payload }: PayloadAction<number>) => {
      if (payload >= 0 && payload < state.length) {
        state.splice(payload, 1);
        storeCart(state);
      }
    },

    updateCartItemByIndex: (
      state,
      { payload }: PayloadAction<{ index: number; item: LocalCartItem }>
    ) => {
      const { index, item } = payload;
      if (index >= 0 && index < state.length) {
        state[index] = item;
        storeCart(state);
      }
    },

    clearCart: (state) => {
      state.length = 0;
      removeStoredCart();
    },
  },
});

export const {
  initializeCart,
  addToCart,
  removeFromCartByIndex,
  updateCartItemByIndex,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
