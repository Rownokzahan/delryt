import Modal from "@/modals/Modal";
import { RiDiscountPercentFill } from "react-icons/ri";

const SavingsModal = () => {
  return (
    <Modal modalId="savingsModal" containerClasses="rounded-xl">
      <div className="p-4">
        <div className="mb-5 flex items-center gap-2">
          <RiDiscountPercentFill className="text-success text-4xl" />
          <h3 className="text-xl font-medium">Savings only on Eatsure</h3>
        </div>

        <div className="space-y-3">
          <p className="flex items-center justify-between">
            <span>Savings On Delivery Charges</span>
            <span className="text-end">₹30</span>
          </p>
          <p className="flex items-center justify-between">
            <span>Savings On Packaging Charges</span>
            <span className="text-end">₹30</span>
          </p>
        </div>
      </div>

      <div className="px-4 py-3 bg-success/10">
        <p className="text-lg font-medium flex items-center justify-between">
          <span>17% Savings on Order Value</span>
          <span className="text-end">₹60</span>
        </p>
      </div>
    </Modal>
  );
};

export default SavingsModal;