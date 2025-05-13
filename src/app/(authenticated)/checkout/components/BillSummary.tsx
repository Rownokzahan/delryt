"use client";

import { useCart } from "@/hooks/useCart";
import useCheckoutState from "@/hooks/useCheckoutState";

const BillSummary = () => {
  const { cartTotal } = useCart();
  const { appliedCoupon } = useCheckoutState();

  return (
    <div className="p-3 rounded-lg bg-uiWhite">
      <h3 className="mb-2 font-semibold">Bill Summary</h3>

      <div className="border rounded-md text-sm">
        <div className="p-3 space-y-2">
          <div className="flex item-center justify-between">
            <p>
              Order Total{" "}
              <span className="text-uiBlack-light">(Excl.Taxes)</span>
            </p>
            <p className="text-end">৳{cartTotal}</p>
          </div>

          <div className="flex item-center justify-between">
            <p>Coupon Discount </p>
            <p className="text-end">- ৳{appliedCoupon.couponDiscountAmount}</p>
          </div>

          <div className="flex item-center justify-between">
            <p>Taxes & Charges </p>
            <p className="text-end">৳{0}</p>
          </div>

          <div className="flex item-center justify-between">
            <p>Delivery Fees</p>
            <p className="text-end">
              <span className="text-uiBlack-light line-through">৳60</span> ৳0
            </p>
          </div>
        </div>

        <div className="p-3 border-t rounded-b-md bg-primary/5 flex item-center justify-between">
          <p>
            <span className="font-medium">To Pay</span>{" "}
            <span className="text-uiBlack-light">(Incl. Taxes)</span>
          </p>
          <p className="text-end">
            <span className="text-uiBlack-light line-through">
              {cartTotal + 60}
            </span>{" "}
            <span className="font-medium">
              ৳{cartTotal - appliedCoupon.couponDiscountAmount}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillSummary;
