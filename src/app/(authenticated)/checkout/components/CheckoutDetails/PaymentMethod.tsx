import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import InfoCard from "./InfoCard";

const PaymentMethod = () => {
  return (
    <InfoCard
      Icon={MdOutlineAccountBalanceWallet}
      label="Payment Method"
      showArrowButton={false}
    >
      <p>Cash On Delivery</p>
    </InfoCard>
  );
};

export default PaymentMethod;
