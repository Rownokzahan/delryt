import Coupons from "./Coupons";
import BillSummary from "./BillSummary";
import CartItems from "./CartItems";
import OrderNoteForm from "@/forms/OrderNoteForm";

const CheckoutDetails = () => {
  return (
    <>
      <CartItems />
      <Coupons />
      <BillSummary />
      <OrderNoteForm />
    </>
  );
};

export default CheckoutDetails;
