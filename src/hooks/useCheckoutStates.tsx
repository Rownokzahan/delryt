import {
  applyCouponById,
  removeCoupon,
} from "@/store/features/checkout/checkoutSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutStates = () => {
  const { coupon } = useSelector((state: RootState) => state.checkout);
  const dispatch = useDispatch();

  return {
    coupon,
    applyCouponById: (couponId: string) => dispatch(applyCouponById(couponId)),
    removeCoupon: () => dispatch(removeCoupon()),
  };
};

export default useCheckoutStates;
