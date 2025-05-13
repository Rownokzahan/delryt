"use client";

import useModalById from "@/hooks/useModalById";
import { IoMdArrowDropright } from "react-icons/io";
import AppliedCoupon from "./AppliedCoupon";

const Coupon = () => {
  const { openModal } = useModalById("couponsModal");

  return (
    <div className="p-3 rounded-lg bg-uiWhite">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Coupons for you</h3>

        <button onClick={openModal} className="ps-3 border-s flex items-center">
          <span className="text-sm">View all</span>
          <IoMdArrowDropright className="text-primary text-lg" />
        </button>
      </div>

      <AppliedCoupon />
    </div>
  );
};

export default Coupon;
