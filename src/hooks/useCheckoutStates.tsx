import {
  applyCouponById,
  removeCoupon,
  resetDeliveryTipAmount,
  updateDeliveryTipAmount,
} from "@/store/features/checkout/checkoutSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutStates = () => {
  const { coupon, deliveryTip } = useSelector(
    (state: RootState) => state.checkout
  );
  const dispatch = useDispatch();

  return {
    coupon,
    applyCouponById: (couponId: string) => dispatch(applyCouponById(couponId)),
    removeCoupon: () => dispatch(removeCoupon()),

    deliveryTip,
    updateDeliveryTipAmount: (amount: number) =>
      dispatch(updateDeliveryTipAmount(amount)),
    resetDeliveryTipAmount: () => dispatch(resetDeliveryTipAmount()),
  };
};

export default useCheckoutStates;
