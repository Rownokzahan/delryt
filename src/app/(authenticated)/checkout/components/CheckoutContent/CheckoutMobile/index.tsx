import OrderNoteForm from "@/forms/OrderNoteForm";
import BillSummary from "../../BillSummary";
import CartItems from "../../CartItems";
import Coupons from "../../Coupons";
import FixedBottomBar from "./FixedBottomBar";

const CheckoutMobile = () => {
  return (
    <div className="md:hidden ui-container pt-3 pb-20 space-y-4">
      <div className="bg-uiWhite rounded-lg">
        Cart
        <CartItems />
      </div>
      <Coupons />
      <BillSummary />
      <OrderNoteForm />
      <FixedBottomBar />
    </div>
  );
};

export default CheckoutMobile;
