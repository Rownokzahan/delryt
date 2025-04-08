import Modal from "../Modal";
import AddAddressForm from "@/forms/AddAddressForm";

const AddAddressModal = () => {
  return (
    <Modal modalId="addAddressModal">
      <div className="p-3 border-b shadow-md">
        <h3 className="text-lg font-medium">Add New Address</h3>
      </div>

      <AddAddressForm />
    </Modal>
  );
};

export default AddAddressModal;
