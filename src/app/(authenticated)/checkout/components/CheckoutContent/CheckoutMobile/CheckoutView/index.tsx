import CheckoutDetails from "../../../CheckoutDetails";
import PlaceOrderButton from "../../../PlaceOrderButton";
import { RiArrowUpWideLine } from "react-icons/ri";
import BillSummary from "../../../BillSummary";
import { useState } from "react";
import { useCart } from "@/stores/useCartStore";
import { useAppliedCoupon } from "@/stores/useCheckoutStore";

const CheckoutView = () => {
  const { cartTotal } = useCart();
  const { couponDiscountAmount } = useAppliedCoupon();

  const [showBillSummary, setShowBillSummary] = useState(false);

  const toggleSummary = () => {
    setShowBillSummary((prev) => !prev);
  };

  return (
    <div className="pt-5 pb-35">
      <CheckoutDetails />

      <div className="w-full fixed left-0 bottom-0 bg-uiWhite rounded-t-2xl">
        <div className="ui-container py-3 bg-primary/5 rounded-t-2xl">
          <div className="mb-3 px-1 pt-3 relative text-uiBlack-light">
            {showBillSummary ? (
              <BillSummary />
            ) : (
              <div className="flex justify-between items-center">
                <h3>Total Amount</h3>
                <p>৳ {cartTotal - couponDiscountAmount}</p>
              </div>
            )}

            <button
              onClick={toggleSummary}
              className="absolute -top-2 left-1/2 -translate-x-1/2"
            >
              <RiArrowUpWideLine />
            </button>
          </div>

          <PlaceOrderButton />
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
