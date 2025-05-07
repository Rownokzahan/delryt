import {
  applyCouponById,
  removeCoupon,
  resetOrderNote,
  setCheckoutAddress,
  setDeliveryTime,
  setOrderNote,
} from "@/store/features/checkout/checkoutSlice";
import { RootState } from "@/store/store";
import { Address, DeliveryTimeState } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutStates = () => {
  const { deliveryTime, checkoutAddress, orderNote, coupon } = useSelector(
    (state: RootState) => state.checkout
  );
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

  return {
    deliveryTime,
    updateDeliveryTime,
    checkoutAddress,
    updateCheckoutAddress,
    orderNote,
    updateOrderNote,
    removeOrderNote,
    coupon,
    applyCouponById: (couponId: string) => dispatch(applyCouponById(couponId)),
    removeCoupon: () => dispatch(removeCoupon()),
  };
};

export default useCheckoutStates;
