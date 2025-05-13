import DeliveryType from "./DeliveryType";
import AddressInfo from "./AddressInfo";
import DeliveryTime from "./DeliveryTime";
import PaymentMethod from "./PaymentMethod";
import AdditonalRequest from "./AdditonalRequest";
import AddCutlery from "./AddCutlery";

const CheckoutDetails = () => {
  return (
    <div className="space-y-4">
      <DeliveryTime />
      <AddressInfo />
      <DeliveryType />
      <PaymentMethod />
      <AddCutlery />
      <AdditonalRequest />
    </div>
  );
};

export default CheckoutDetails;
