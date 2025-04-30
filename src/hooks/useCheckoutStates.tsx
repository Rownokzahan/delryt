import {
  applyCouponById,
  removeCoupon,
  setDeliveryTime,
} from "@/store/features/checkout/checkoutSlice";
import { RootState } from "@/store/store";
import { DeliveryTimeState } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutStates = () => {
  const { deliveryTime, coupon } = useSelector(
    (state: RootState) => state.checkout
  );
  const dispatch = useDispatch();

  const updateDeliveryTime = (deliveryTime: DeliveryTimeState) => {
    dispatch(setDeliveryTime(deliveryTime));
  };

  return {
    deliveryTime,
    updateDeliveryTime,
    coupon,
    applyCouponById: (couponId: string) => dispatch(applyCouponById(couponId)),
    removeCoupon: () => dispatch(removeCoupon()),
  };
};

export default useCheckoutStates;
