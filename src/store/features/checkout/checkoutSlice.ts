import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Coupon {
  id: string;
  title: string;
  amountSaved: number;
  code: string;
  description: string;
}

interface CouponState {
  appliedCoupon: null | Coupon;
  couponList: Coupon[];
}

interface CheckoutState {
  coupon: CouponState;
}

const initialState: CheckoutState = {
  coupon: {
    appliedCoupon: null,
    couponList: [
      {
        id: "01",
        title: "Save ₹235 more",
        code: "ES50",
        amountSaved: 235,
        description:
          "Flat 50% off on orders above Rs. 199. Not applicable on combos, Sides & Beverages",
      },
      {
        id: "02",
        title: "Save ₹150 more",
        code: "SAVE150",
        amountSaved: 150,
        description: "Get 30% off on your next order",
      },
    ],
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    applyCouponById: (state, { payload }: PayloadAction<string>) => {
      const selectedCoupon = state.coupon.couponList.find(
        (coupon) => coupon.id === payload
      );
      state.coupon.appliedCoupon = selectedCoupon ?? null;
    },
    removeCoupon: (state) => {
      state.coupon.appliedCoupon = null;
    },
  },
});

export const { applyCouponById, removeCoupon } = checkoutSlice.actions;

export default checkoutSlice.reducer;
