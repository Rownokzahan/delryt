import ChangeDeliveryTime from "../../ChangeDeliveryTime";
import CheckoutDetails from "../../CheckoutDetails";
import FixedBottomBar from "./FixedBottomBar";

const CheckoutMobile = () => {
  return (
    <div className="md:hidden ui-container pt-3 pb-20 space-y-4">
      <ChangeDeliveryTime />
      <CheckoutDetails />
      <FixedBottomBar />
    </div>
  );
};

export default CheckoutMobile;
