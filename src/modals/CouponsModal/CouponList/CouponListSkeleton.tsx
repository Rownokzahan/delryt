import CouponCardSkeleton from "./CouponCard/CouponCardSkeleton";

const CouponListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, index) => (
        <CouponCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CouponListSkeleton;
