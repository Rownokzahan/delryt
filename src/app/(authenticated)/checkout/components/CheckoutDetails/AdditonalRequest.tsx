import { BiSolidMessageSquareEdit } from "react-icons/bi";
import InfoCard from "./InfoCard";

const AdditonalRequest = () => {
  return (
    <InfoCard
      Icon={BiSolidMessageSquareEdit}
      label="Additonal Request (Optional)"
      showArrowButton={false}
    >
      <textarea
        name=""
        id=""
        className="mt-2 w-full p-2 border rounded-sm outline-0"
      ></textarea>
    </InfoCard>
  );
};

export default AdditonalRequest;
