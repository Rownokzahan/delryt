import {
  applyCouponById,
  removeCoupon,
  setCheckoutAddress,
  setDeliveryTime,
} from "@/store/features/checkout/checkoutSlice";
import { RootState } from "@/store/store";
import { Address, DeliveryTimeState } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutStates = () => {
  const { deliveryTime, checkoutAddress, coupon } = useSelector(
    (state: RootState) => state.checkout
  );
  const dispatch = useDispatch();

  const updateDeliveryTime = (deliveryTime: DeliveryTimeState) => {
    dispatch(setDeliveryTime(deliveryTime));
  };

  const updateCheckoutAddress = (address: Address) => {
    dispatch(setCheckoutAddress(address));
  };

  return {
    deliveryTime,
    updateDeliveryTime,
    checkoutAddress,
    updateCheckoutAddress,
    coupon,
    applyCouponById: (couponId: string) => dispatch(applyCouponById(couponId)),
    removeCoupon: () => dispatch(removeCoupon()),
  };
};

export default useCheckoutStates;
