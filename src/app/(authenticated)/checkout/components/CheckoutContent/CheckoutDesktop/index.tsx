import ChangeDeliveryTime from "../../ChangeDeliveryTime";
import CheckoutDetails from "../../CheckoutDetails";
import ChooseAddress from "../../ChooseAddress";
import ChoosePayment from "../../ChoosePayment";
import CartSummaryHeader from "./CartSummaryHeader";

const CheckoutDesktop = () => {
  return (
    <div className="hidden md:flex ui-container py-6 gap-8">
      <div className="flex-1 space-y-4">
        <ChangeDeliveryTime />
        <ChooseAddress />
        <ChoosePayment />
      </div>

      <div className="w-[47%] lg:w-[40%] h-[calc(100dvh-177px)] overflow-hidden rounded-xl bg-gray-100">
        <CartSummaryHeader />

        <div
          className="p-4 h-[calc(100dvh-300px)] overflow-y-auto space-y-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#c60e0e transparent",
          }}
        >
          <CheckoutDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDesktop;
