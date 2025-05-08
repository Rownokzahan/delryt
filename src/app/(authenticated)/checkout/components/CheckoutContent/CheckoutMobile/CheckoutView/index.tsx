import OrderNoteForm from "@/forms/OrderNoteForm";
import ChangeDeliveryTime from "../../../ChangeDeliveryTime";
import ChooseAddress from "../../../ChooseAddress";
import ChoosePayment from "../../../ChoosePayment";

const CheckoutView = () => {
  return (
    <div className="min-h-[calc(100dvh-56px)] py-4 space-y-4">
      <ChangeDeliveryTime />
      <ChooseAddress />
      <ChoosePayment />
      <OrderNoteForm />
    </div>
  );
};

export default CheckoutView;
