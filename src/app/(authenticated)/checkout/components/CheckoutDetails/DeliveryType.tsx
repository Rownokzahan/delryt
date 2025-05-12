import { TbPaperBag } from "react-icons/tb";
import InfoCard from "./InfoCard";

const DeliveryType = () => {
  return (
    <InfoCard Icon={TbPaperBag} label="Delivery Type" showArrowButton={false}>
      <p>Home Delivery</p>
    </InfoCard>
  );
};

export default DeliveryType;
