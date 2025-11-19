import { useCart } from "@/stores/useCartStore";
import { useCheckoutActions } from "@/stores/useCheckoutStore";
import { Coupon } from "@/types";
import toast from "react-hot-toast";

const useHandleCouponApply = () => {
  const { cartTotal } = useCart();
  const { applyCoupon } = useCheckoutActions();

  const handleApplyCoupon = (coupon: Coupon) => {
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

    applyCoupon({ coupon, discountAmount });
    toast.success("Coupon code applied successfully!");
  };

  return { handleApplyCoupon };
};

export default useHandleCouponApply;
