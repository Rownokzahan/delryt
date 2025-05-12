import CouponCard from "./CouponCard";
import { useGetCouponsQuery } from "@/store/features/checkout/couponApi";
import CouponListSkeleton from "./CouponListSkeleton";

const CouponList = () => {
  const { data: couponList = [], isLoading, error } = useGetCouponsQuery();

  if (isLoading) {
    return <CouponListSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch banners:", error);
  }

  if (couponList.length === 0) {
    return (
      <div className="grid place-content-center">
        <p className="text-sm text-uiBlack-light">No coupons available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {couponList.map((coupon) => (
        <CouponCard key={coupon.id} coupon={coupon} />
      ))}
    </div>
  );
};

export default CouponList;
