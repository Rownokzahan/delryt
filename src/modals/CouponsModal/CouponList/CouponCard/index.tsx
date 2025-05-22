import useCheckoutState from "@/hooks/useCheckoutState";
import useModalById from "@/hooks/useModalById";
import { Coupon } from "@/types";
import clsx from "clsx";
import { PiPercentBold } from "react-icons/pi";

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard = ({ coupon }: CouponCardProps) => {
  const { appliedCoupon, applyCoupon, removeCoupon } = useCheckoutState();
  const { closeModal } = useModalById("couponsModal");

  const {
    id,
    title,
    discount_type,
    code,
    expire_date,
    min_purchase,
    max_discount,
  } = coupon || {};

  const isApplied = appliedCoupon.coupon?.id === id;

  const formatedExpireDate = new Date(expire_date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleClick = () => {
    if (isApplied) {
      removeCoupon();
      return;
    }

    applyCoupon(coupon);
    closeModal();
  };

  return (
    <div className="p-1 rounded-lg bg-uiWhite">
      <div className="bg-tertiary/40 p-2 rounded-t-lg">
        <h3 className="font-medium">{title}</h3>
      </div>

      <div className="p-3">
        <div className="mb-3 ps-3 p-1 border border-dashed rounded-xs flex items-center">
          <div className="text-success">
            {discount_type === "amount" ? <PiPercentBold /> : <p>৳</p>}
          </div>

          <p className="flex-1 px-3 font-medium">{code}</p>

          <button
            onClick={handleClick}
            className={clsx(
              "w-20 py-1 border border-primary rounded-sm font-medium text-sm text-center",
              isApplied ? "bg-uiWhite text-primary" : "bg-primary text-uiWhite"
            )}
            aria-label={isApplied ? "Remove Coupon" : "Apply Coupon"}
          >
            {isApplied ? "Remove" : "Apply"}
          </button>
        </div>

        <div className="text-xs text-uiBlack-light">
          <p>
            Valid till {formatedExpireDate} • Minimum purchase {min_purchase} •
            Maximum discount {max_discount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
