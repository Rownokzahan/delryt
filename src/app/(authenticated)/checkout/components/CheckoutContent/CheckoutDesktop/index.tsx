import CartSummaryHeader from "./CartSummaryHeader";
import CartItems from "../../CartItems";
import Coupon from "../../Coupon";
import BillSummary from "../../BillSummary";
import CheckoutDetails from "../../CheckoutDetails";
import PlaceOrderButton from "../../PlaceOrderButton";

const CheckoutDesktop = () => {
  return (
    <div className="hidden md:flex ui-container py-6 gap-8">
      <div className="w-[52%]">
        <CheckoutDetails />
      </div>

      <div className="min-w-0 flex-1 rounded-xl bg-gray-100">
        <CartSummaryHeader />

        <div
          className="p-4 h-[calc(100dvh-318px)] overflow-y-auto space-y-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#c60e0e transparent",
          }}
        >
          <CartItems />
          <Coupon />
          <BillSummary />
        </div>

        <div className="px-4 py-3 bg-uiWhite">
          <PlaceOrderButton />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDesktop;
