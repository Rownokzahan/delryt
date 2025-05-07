"use client";

import useCheckoutStates from "@/hooks/useCheckoutStates";
import useModalById from "@/hooks/useModalById";
import { CgCheck } from "react-icons/cg";
import { IoMdArrowDropright } from "react-icons/io";

const Coupons = () => {
  const { openModal } = useModalById("couponsModal");
  const {
    coupon: { appliedCoupon },
    removeCoupon,
  } = useCheckoutStates();

  return (
    <div className="p-3 rounded-lg bg-uiWhite">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Coupons for you</h3>

        <button onClick={openModal} className="ps-3 border-s flex items-center">
          <span className="text-sm">View all</span>
          <IoMdArrowDropright className="text-primary text-lg" />
        </button>
      </div>

      {appliedCoupon !== null && (
        <div className="mt-2 p-2 ps-3 border rounded-md bg-uiBlack-light/5 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="size-6 border border-uiBlack-light/40 rounded-full bg-uiWhite grid place-items-center">
              <CgCheck className="text-success text-lg" />
            </div>
            <div>
              <h4 className="text-sm">{appliedCoupon.code}</h4>
              <p className="text-xs text-uiBlack-light">
                ৳ {appliedCoupon.amountSaved} Saved
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
      )}
    </div>
  );
};

export default Coupons;
