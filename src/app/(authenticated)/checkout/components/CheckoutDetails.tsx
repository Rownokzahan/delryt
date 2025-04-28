import CookingInstructionForm from "@/forms/CookingInstructionForm";
import Coupons from "./Coupons";
import TipDeliveryAssistant from "./TipDeliveryAssistant";
import BillSummary from "./BillSummary";
import CartItems from "./CartItems";

const CheckoutDetails = () => {
  return (
    <>
      <CartItems />
      <CookingInstructionForm />
      <Coupons />
      <TipDeliveryAssistant />
      <BillSummary />
    </>
  );
};

export default CheckoutDetails;
