import CookingInstructionForm from "@/forms/CookingInstructionForm";
import Coupons from "./Coupons";
import BillSummary from "./BillSummary";
import CartItems from "./CartItems";

const CheckoutDetails = () => {
  return (
    <>
      <CartItems />
      <CookingInstructionForm />
      <Coupons />
      <BillSummary />
    </>
  );
};

export default CheckoutDetails;
