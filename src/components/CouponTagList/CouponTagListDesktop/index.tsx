"use client";

import CouponTagCard from "@/cards/CouponTagCard";
import { Coupon } from "@/types";
import { useState } from "react";

interface CouponTagListDesktopProps {
  coupons: Coupon[];
}

const CouponTagListDesktop = ({ coupons }: CouponTagListDesktopProps) => {
  const [showAllCoupons, setShowAllCoupons] = useState<boolean>(false);

  return (
    <div className="pb-1 flex items-center gap-4 text-sm overflow-x-auto hover-scrollbar">
      {showAllCoupons ? (
        coupons.map((coupon) => (
          <CouponTagCard key={coupon.id} coupon={coupon} />
        ))
      ) : (
        <>
          <CouponTagCard coupon={coupons[0]} />

          {coupons.length > 1 && (
            <button
              onClick={() => setShowAllCoupons(true)}
              aria-label={`Show ${coupons.length - 1} more offers`}
              className="text-gray-400 text-nowrap"
            >
              + {coupons.length - 1} Offers
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CouponTagListDesktop;
