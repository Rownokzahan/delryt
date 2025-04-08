import Modal from "../Modal";
import EditProfileForm from "@/forms/EditProfileForm";

const EditProfileModal = () => {
  return (
    <Modal modalId="editProfileModal">
      <div className="p-3 border-b shadow-md">
        <h3 className="text-lg font-medium">Update Your Personal Details</h3>
      </div>

      <EditProfileForm />
    </Modal>
  );
};

export default EditProfileModal;
