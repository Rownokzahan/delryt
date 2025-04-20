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

interface DeliveryTipState {
  amount: null | number;
  suggestedOptions: {
    text: string;
    amount: number;
    is_most_tipped: boolean;
  }[];
}

interface CheckoutState {
  coupon: CouponState;
  deliveryTip: DeliveryTipState;
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

  deliveryTip: {
    amount: null,
    suggestedOptions: [
      { text: "₹11", amount: 11, is_most_tipped: false },
      { text: "₹21", amount: 21, is_most_tipped: true },
      { text: "₹51", amount: 51, is_most_tipped: false },
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

    updateDeliveryTipAmount: (state, { payload }: PayloadAction<number>) => {
      state.deliveryTip.amount = payload;
    },
    resetDeliveryTipAmount: (state) => {
      state.deliveryTip.amount = null;
    },
  },
});

export const {
  applyCouponById,
  removeCoupon,
  updateDeliveryTipAmount,
  resetDeliveryTipAmount,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
