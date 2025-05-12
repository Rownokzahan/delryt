import {
  applyCoupon as applyCouponAction,
  removeCoupon as removeCouponAction,
  resetMobileCheckoutView as resetMobileCheckoutViewAction,
  resetOrderNote,
  setCheckoutAddress,
  setDeliveryTime,
  setMobileCheckoutView,
  setOrderNote,
} from "@/store/features/checkout/checkoutSlice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Address, Coupon, DeliveryTimeState } from "@/types";

const useCheckoutState = () => {
  const dispatch = useDispatch();

  // Selectors
  const {
    deliveryTime,
    checkoutAddress,
    appliedCoupon,
    orderNote,
    mobileCheckoutView,
  } = useSelector((state: RootState) => state.checkout);

  // Delivery time
  const updateDeliveryTime = (time: DeliveryTimeState) => {
    dispatch(setDeliveryTime(time));
  };

  // Checkout address
  const updateCheckoutAddress = (address: Address) => {
    dispatch(setCheckoutAddress(address));
  };

  // Order note
  const updateOrderNote = (note: string) => {
    dispatch(setOrderNote(note));
  };

  const removeOrderNote = () => {
    dispatch(resetOrderNote());
  };

  // Mobile checkout view
  const updateMobileCheckoutView = (view: "cart" | "checkout") => {
    dispatch(setMobileCheckoutView(view));
  };

  const resetMobileCheckoutView = () => {
    dispatch(resetMobileCheckoutViewAction());
  };

  // Coupon
  const applyCoupon = (coupon: Coupon) => {
    dispatch(applyCouponAction(coupon));
  };

  const removeCoupon = () => {
    dispatch(removeCouponAction());
  };

  return {
    // State
    deliveryTime,
    checkoutAddress,
    appliedCoupon,
    orderNote,
    mobileCheckoutView,

    // Actions
    updateDeliveryTime,
    updateCheckoutAddress,
    updateOrderNote,
    removeOrderNote,
    updateMobileCheckoutView,
    resetMobileCheckoutView,
    applyCoupon,
    removeCoupon,
  };
};

export default useCheckoutState;
