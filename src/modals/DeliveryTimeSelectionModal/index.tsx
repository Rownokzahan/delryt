import Modal from "../Modal";
import DateSelection from "./components/DateSelection";
import DeliveryTimeSelectionFooter from "./components/DeliveryTimeSelectionFooter";
import DeliveryTimeSelectionHeader from "./components/DeliveryTimeSelectionHeader";
import TimeSelection from "./components/TimeSelection";
import SelectedTimeDateProvider from "./SelectedTimeDateProvider";

const DeliveryTimeSelectionModal = () => {
  return (
    <Modal
      modalId="deliveryTimeSelectionModal"
      fullHeightOnSmall={false}
      containerClasses="rounded-t-xl sm:rounded-t-none"
    >
      <SelectedTimeDateProvider>
        <DeliveryTimeSelectionHeader />
        <DateSelection />
        <TimeSelection />
        <DeliveryTimeSelectionFooter />
      </SelectedTimeDateProvider>
    </Modal>
  );
};

export default DeliveryTimeSelectionModal;
