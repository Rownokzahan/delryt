import DeliveryType from "./DeliveryType";
import AddressInfo from "./AddressInfo";
import DeliveryTime from "./DeliveryTime";
import PaymentMethod from "./PaymentMethod";
import AdditonalRequest from "./AdditonalRequest";

const CheckoutDetails = () => {
  return (
    <div className="space-y-4">
      <DeliveryTime />
      <AddressInfo />
      <DeliveryType />
      <PaymentMethod />
      <AdditonalRequest />
    </div>
  );
};

export default CheckoutDetails;
