import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import InfoCard from "./InfoCard";

const PaymentMethod = () => {
  return (
    <InfoCard
      Icon={MdOutlineAccountBalanceWallet}
      label="Payment Method"
      onArrowButtonClick={() => {}}
    >
      <p>Cash On Delivery</p>
    </InfoCard>
  );
};

export default PaymentMethod;
