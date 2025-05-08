import Button from "@/components/ui/Button";
import ChangeDeliveryTime from "../../ChangeDeliveryTime";
import ChooseAddress from "../../ChooseAddress";
import ChoosePayment from "../../ChoosePayment";
import CartSummaryHeader from "./CartSummaryHeader";
import CartItems from "../../CartItems";
import Coupons from "../../Coupons";
import BillSummary from "../../BillSummary";
import OrderNoteForm from "@/forms/OrderNoteForm";

const CheckoutDesktop = () => {
  return (
    <div className="hidden md:flex ui-container py-6 gap-8">
      <div className="w-[52%] space-y-4">
        <ChangeDeliveryTime />
        <ChooseAddress />
        <ChoosePayment />
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
          <Coupons />
          <BillSummary />
          <OrderNoteForm />
        </div>

        <div className="px-4 py-3 bg-uiWhite">
          <Button className="w-full">Place order</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDesktop;
