import { Address, Coupon, DeliveryTimeState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  deliveryTime: DeliveryTimeState;
  checkoutAddress: Address | null;
  orderNote: string;
  mobileCheckoutView: "cart" | "checkout";
  appliedCoupon: {
    coupon: null | Coupon;
    couponDiscountAmount: number;
  };
  orderType: string;
  paymentMethod: string;
  addCutlery: boolean;
}

// Initial value for deliveryTime
const initialDeliveryTime: DeliveryTimeState = {
  text: "Now",
  date: new Date().toISOString(),
  time: "now",
};

const initialState: CheckoutState = {
  deliveryTime: initialDeliveryTime,
  checkoutAddress: null,
  orderNote: "",
  mobileCheckoutView: "cart",
  appliedCoupon: {
    coupon: null,
    couponDiscountAmount: 0,
  },
  orderType: "delivery",
  paymentMethod: "cash_on_delivery",
  addCutlery: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    // Set delivery time
    setDeliveryTime: (state, { payload }: PayloadAction<DeliveryTimeState>) => {
      state.deliveryTime = payload;
    },

    // Set address for checkout
    setCheckoutAddress: (state, { payload }: PayloadAction<Address>) => {
      state.checkoutAddress = payload;
    },

    // Set or reset order note
    setOrderNote: (state, { payload }: PayloadAction<string>) => {
      state.orderNote = payload;
    },
    resetOrderNote: (state) => {
      state.orderNote = "";
    },

    // Manage mobile checkout view state
    setMobileCheckoutView: (
      state,
      action: PayloadAction<"cart" | "checkout">
    ) => {
      state.mobileCheckoutView = action.payload;
    },
    resetMobileCheckoutView: (state) => {
      state.mobileCheckoutView = initialState.mobileCheckoutView;
    },

    // Apply or remove a coupon
    applyCoupon: (
      state,
      { payload }: PayloadAction<{ coupon: Coupon; discountAmount: number }>
    ) => {
      const { coupon, discountAmount } = payload;
      state.appliedCoupon.coupon = coupon;
      state.appliedCoupon.couponDiscountAmount = discountAmount;
    },
    removeCoupon: (state) => {
      state.appliedCoupon = initialState.appliedCoupon;
    },

    // Toggle add cutlery option
    toggleAddCutlery: (state) => {
      state.addCutlery = !state.addCutlery;
    },

    // Reset checkout state but keep the selected delivery time
    resetCheckoutStateExceptDeliveryTime: (state) => {
      return {
        ...initialState,
        deliveryTime: state.deliveryTime, // Preserve current deliveryTime
      };
    },

    // Fully reset checkout state
    resetCheckoutState: () => initialState,
  },
});

export const {
  setDeliveryTime,
  setCheckoutAddress,
  setOrderNote,
  resetOrderNote,
  setMobileCheckoutView,
  resetMobileCheckoutView,
  applyCoupon,
  removeCoupon,
  toggleAddCutlery,
  resetCheckoutStateExceptDeliveryTime,
  resetCheckoutState,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
