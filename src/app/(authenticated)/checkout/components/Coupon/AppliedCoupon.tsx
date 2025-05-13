"use client"

import useCheckoutState from "@/hooks/useCheckoutState";
import { CgCheck } from "react-icons/cg";

const AppliedCoupon = () => {
  const { appliedCoupon, removeCoupon } = useCheckoutState();

  if (appliedCoupon.coupon === null) {
    return null;
  }

  const { code, discount_type, discount } = appliedCoupon.coupon;

  return (
    <div className="mt-2 p-2 ps-3 border rounded-md bg-uiBlack-light/5 flex items-center gap-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="size-6 border border-uiBlack-light/40 rounded-full bg-uiWhite grid place-items-center">
          <CgCheck className="text-success text-lg" />
        </div>

        <div>
          <h4 className="text-sm">{code}</h4>
          <p className="text-xs text-uiBlack-light">
            {discount_type === "amount"
              ? `৳ ${discount} off`
              : `${discount}% off`}
          </p>
        </div>
      </div>

      <button
        onClick={removeCoupon}
        type="submit"
        className="py-1 px-3 border border-primary rounded-sm bg-uiWhite text-primary font-medium text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default AppliedCoupon;
