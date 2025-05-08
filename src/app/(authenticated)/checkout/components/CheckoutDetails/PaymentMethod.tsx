import { IoWallet } from "react-icons/io5";
import InfoCard from "./InfoCard";

const PaymentMethod = () => {
  return (
    <InfoCard
      Icon={IoWallet}
      label="Payment Method"
      onArrowButtonClick={() => {}}
    >
      <p>Cash On Delivery</p>
    </InfoCard>
  );
};

export default PaymentMethod;
