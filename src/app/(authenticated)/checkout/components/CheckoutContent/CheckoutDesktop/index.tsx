import Button from "@/components/ui/Button";
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

      <div className="w-[47%] lg:w-[40%] overflow-hidden rounded-xl bg-gray-100">
        <CartSummaryHeader />

        <div
          className="p-4 h-[calc(100dvh-318px)] overflow-y-auto space-y-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#c60e0e transparent",
          }}
        >
          <CheckoutDetails />
        </div>

        <div className="px-4 py-3 bg-uiWhite">
          <Button className="w-full">Place order</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDesktop;
