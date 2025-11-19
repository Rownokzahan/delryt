import { create } from "zustand";
import { Address, Coupon, DeliveryTimeState } from "@/types";

interface State {
  deliveryTime: DeliveryTimeState;
  checkoutAddress: Address | null;
  orderNote: string;
  mobileCheckoutView: "cart" | "checkout";
  appliedCoupon: {
    coupon: Coupon | null;
    couponDiscountAmount: number;
  };
  orderType: string;
  paymentMethod: string;
  addCutlery: boolean;
}

interface Actions {
  actions: {
    setDeliveryTime: (time: DeliveryTimeState) => void;
    setCheckoutAddress: (address: Address) => void;
    setOrderNote: (note: string) => void;
    resetOrderNote: () => void;
    setMobileCheckoutView: (view: "cart" | "checkout") => void;
    applyCoupon: (params: { coupon: Coupon; discountAmount: number }) => void;
    removeCoupon: () => void;
    toggleAddCutlery: () => void;
    resetCheckoutExceptTime: () => void;
    resetCheckout: () => void;
  };
}

// Initial value for deliveryTime
const initialDeliveryTime: DeliveryTimeState = {
  text: "Now",
  date: new Date().toISOString(),
  time: "now",
};

const initialState: State = {
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

export const useCheckoutStore = create<State & Actions>((set) => ({
  ...initialState,

  actions: {
    setDeliveryTime: (deliveryTime) => set({ deliveryTime }),

    setCheckoutAddress: (checkoutAddress) => set({ checkoutAddress }),

    setOrderNote: (orderNote) => set({ orderNote }),
    resetOrderNote: () => set({ orderNote: initialState.orderNote }),

    setMobileCheckoutView: (mobileCheckoutView) => set({ mobileCheckoutView }),

    applyCoupon: ({ coupon, discountAmount }) =>
      set({ appliedCoupon: { coupon, couponDiscountAmount: discountAmount } }),
    removeCoupon: () => set({ appliedCoupon: initialState.appliedCoupon }),

    toggleAddCutlery: () => set((state) => ({ addCutlery: !state.addCutlery })),

    // Reset checkout state but keep the selected delivery time
    resetCheckoutExceptTime: () =>
      set((state) => ({
        ...initialState,
        deliveryTime: state.deliveryTime, // Preserve current deliveryTime
      })),

    resetCheckout: () => set({ ...initialState }),
  },
}));

// State selectors
export const useDeliveryTime = () =>
  useCheckoutStore((state) => state.deliveryTime);

export const useCheckoutAddress = () =>
  useCheckoutStore((state) => state.checkoutAddress);

export const useOrderNote = () => useCheckoutStore((state) => state.orderNote);

export const useMobileCheckoutView = () =>
  useCheckoutStore((state) => state.mobileCheckoutView);

export const useAppliedCoupon = () =>
  useCheckoutStore((state) => state.appliedCoupon);

export const useOrderType = () => useCheckoutStore((state) => state.orderType);

export const usePaymentMethod = () =>
  useCheckoutStore((state) => state.paymentMethod);

export const useAddCutlery = () =>
  useCheckoutStore((state) => state.addCutlery);

// Action hooks
export const useCheckoutActions = () =>
  useCheckoutStore((state) => state.actions);
