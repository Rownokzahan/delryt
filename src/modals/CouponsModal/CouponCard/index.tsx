import useCheckoutStates from "@/hooks/useCheckoutStates";
import useModalById from "@/hooks/useModalById";
import clsx from "clsx";
import { PiPercentBold } from "react-icons/pi";

interface Coupon {
  id: string;
  title: string;
  code: string;
  description: string;
}

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard = ({ coupon }: CouponCardProps) => {
  const { id, title, code, description } = coupon;

  const {
    coupon: { appliedCoupon },
    applyCouponById,
    removeCoupon,
  } = useCheckoutStates();
  const { closeModal } = useModalById("couponsModal");

  const isApplied = appliedCoupon?.id === id;

  const handleClick = () => {
    if (isApplied) {
      removeCoupon();
      return;
    }

    applyCouponById(id);
    closeModal();
  };

  return (
    <div className="p-1 rounded-lg bg-uiWhite">
      <div className="bg-tertiary/40 p-2 rounded-t-lg">
        <h3 className="font-medium">{title}</h3>
      </div>

      <div className="p-3">
        <div className="mb-3 ps-3 p-1 border border-dashed rounded-xs flex items-center">
          <PiPercentBold className="text-success" />
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

        <p className="text-xs text-uiBlack-light">{description}</p>
      </div>
    </div>
  );
};

export default CouponCard;
