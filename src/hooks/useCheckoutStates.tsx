import {
  applyCouponById,
  removeCoupon,
  resetMobileCheckoutView as resetMobileCheckoutViewAction,
  resetOrderNote,
  setCheckoutAddress,
  setDeliveryTime,
  setMobileCheckoutView,
  setOrderNote,
} from "@/store/features/checkout/checkoutSlice";
import { RootState } from "@/store/store";
import { Address, DeliveryTimeState } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutStates = () => {
  const {
    deliveryTime,
    checkoutAddress,
    orderNote,
    mobileCheckoutView,
    coupon,
  } = useSelector((state: RootState) => state.checkout);

  const dispatch = useDispatch();

  const updateDeliveryTime = (deliveryTime: DeliveryTimeState) => {
    dispatch(setDeliveryTime(deliveryTime));
  };

  const updateCheckoutAddress = (address: Address) => {
    dispatch(setCheckoutAddress(address));
  };

  const updateOrderNote = (orderNote: string) => {
    dispatch(setOrderNote(orderNote));
  };

  const removeOrderNote = () => {
    dispatch(resetOrderNote());
  };

  const updateMobileCheckoutView = (view: "cart" | "checkout") => {
    dispatch(setMobileCheckoutView(view));
  };

  const resetMobileCheckoutView = () => {
    dispatch(resetMobileCheckoutViewAction());
  };

  return {
    deliveryTime,
    updateDeliveryTime,
    checkoutAddress,
    updateCheckoutAddress,
    orderNote,
    updateOrderNote,
    removeOrderNote,
    mobileCheckoutView,
    updateMobileCheckoutView,
    resetMobileCheckoutView,
    coupon,
    applyCouponById: (couponId: string) => dispatch(applyCouponById(couponId)),
    removeCoupon: () => dispatch(removeCoupon()),
  };
};

export default useCheckoutStates;
