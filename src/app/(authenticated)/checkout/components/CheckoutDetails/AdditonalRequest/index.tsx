import { BiMessageSquareEdit } from "react-icons/bi";
import InfoCard from "../InfoCard";
import OrderNoteForm from "./OrderNoteForm";

const AdditonalRequest = () => {
  return (
    <InfoCard
      Icon={BiMessageSquareEdit}
      label="Additonal Request"
      showArrowButton={false}
    >
      <OrderNoteForm />
    </InfoCard>
  );
};

export default AdditonalRequest;
