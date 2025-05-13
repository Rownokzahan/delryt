import {
  applyCoupon as applyCouponAction,
  removeCoupon as removeCouponAction,
  resetOrderNote,
  resetCheckoutExceptTime as resetCheckoutExceptTimeAction,
  resetCheckout as resetCheckoutAction,
  setCheckoutAddress,
  setDeliveryTime,
  setMobileCheckoutView,
  setOrderNote,
  toggleAddCutlery as toggleAddCutleryAction,
} from "@/store/features/checkout/checkoutSlice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Address, Coupon, DeliveryTimeState } from "@/types";
import toast from "react-hot-toast";
import { selectCartTotal } from "@/store/features/cart/cartSelectors";

const useCheckoutState = () => {
  const cartTotal = useSelector(selectCartTotal); // Here useCart() is not used to avoid circular dependency
  const dispatch = useDispatch();

  // Selectors
  const {
    deliveryTime,
    checkoutAddress,
    appliedCoupon,
    orderNote,
    mobileCheckoutView,
    orderType,
    paymentMethod,
    addCutlery,
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

  // Coupon
  const applyCoupon = (coupon: Coupon) => {
    const minPurchase = coupon.min_purchase;

    // Check if the cart total meets the coupon's minimum purchase requirement
    if (minPurchase > cartTotal) {
      toast.error(
        `Cart total is too low for this coupon (min ৳${minPurchase}).`
      );
      return;
    }

    let discountAmount = 0;

    // Calculate discount based on the type
    switch (coupon.discount_type) {
      case "amount":
        discountAmount = coupon.discount;
        break;

      case "percent":
        discountAmount = Math.round((cartTotal * coupon.discount) / 100);

        // Cap the discount if it exceeds the coupon's max allowed discount
        if (discountAmount > coupon.max_discount) {
          discountAmount = coupon.max_discount;
        }
        break;

      default:
        // Handle unknown discount types gracefully
        toast.error("Invalid coupon type.");
        return;
    }

    dispatch(applyCouponAction({ coupon, discountAmount }));
    toast.success("Coupon code applied successfully!");
  };

  const removeCoupon = () => {
    dispatch(removeCouponAction());
    toast.error("Coupon removed!");
  };

  const toggleAddCutlery = () => {
    dispatch(toggleAddCutleryAction());
  };

  // Reset checkout state except for the selected delivery time
  const resetCheckoutExceptTime = () => {
    dispatch(resetCheckoutExceptTimeAction());
  };

  // Reset all checkout state
  const resetCheckout = () => {
    dispatch(resetCheckoutAction());
  };

  return {
    // State
    deliveryTime,
    checkoutAddress,
    appliedCoupon,
    orderNote,
    mobileCheckoutView,
    orderType,
    paymentMethod,
    addCutlery,

    // Actions
    updateDeliveryTime,
    updateCheckoutAddress,
    updateOrderNote,
    removeOrderNote,
    updateMobileCheckoutView,
    applyCoupon,
    removeCoupon,
    toggleAddCutlery,
    resetCheckoutExceptTime,
    resetCheckout,
  };
};

export default useCheckoutState;
