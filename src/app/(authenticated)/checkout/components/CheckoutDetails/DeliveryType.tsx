import { BiSolidPackage } from "react-icons/bi";
import InfoCard from "./InfoCard";

const DeliveryType = () => {
  return (
    <InfoCard
      Icon={BiSolidPackage}
      label="Delivery Type"
      onArrowButtonClick={() => {}}
    >
      <p>Home Delivery</p>
    </InfoCard>
  );
};

export default DeliveryType;
