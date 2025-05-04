import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state: RootState) => state.cart;

export const selectCartTotal = createSelector([selectCart], (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
