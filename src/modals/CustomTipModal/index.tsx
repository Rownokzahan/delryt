import Modal from "../Modal";
import CustomTipForm from "@/forms/CustomTipForm";

const CustomTipModal = () => {
  return (
    <Modal modalId="customTipModal" containerClasses="px-4 py-7 rounded-lg">
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-medium">
          Thank your rider with a custom tip
        </h3>
        <p className="text-sm">
          Please enter a tip amount based on your preference for your delivery
          agent!
        </p>
      </div>

      <CustomTipForm />
    </Modal>
  );
};

export default CustomTipModal;
