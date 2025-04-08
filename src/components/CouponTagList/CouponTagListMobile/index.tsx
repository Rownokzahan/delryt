import CouponTagCard from "@/cards/CouponTagCard";
import { Coupon } from "@/types";

interface CouponTagListMobileProps {
  coupons: Coupon[];
}

const CouponTagListMobile = ({ coupons }: CouponTagListMobileProps) => {
  return (
    <div className="flex gap-6 overflow-x-auto custom-scrollbar">
      {coupons.map((coupon) => (
        <CouponTagCard key={coupon.id} coupon={coupon} />
      ))}
    </div>
  );
};

export default CouponTagListMobile;
