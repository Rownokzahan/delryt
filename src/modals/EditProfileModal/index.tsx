"use client";

import { UpdateUser } from "@/types";
import Modal from "../Modal";
import EditProfileForm from "@/forms/profile/EditProfileForm";
import useUser from "@/hooks/useUser";
import { useUpdateUserMutation } from "@/store/features/user/userApi";
import useModalById from "@/hooks/useModalById";
import toast from "react-hot-toast";

const EditProfileModal = () => {
  const { isModalOpen, closeModal } = useModalById("editProfileModal");
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const { user } = useUser();

  if (!isModalOpen) {
    return null;
  }

  if (!user) {
    console.warn("User data is missing in EditProfileModal.");
    return null;
  }

  const handleUpdateUser = async (updatedUser: UpdateUser) => {
    console.log(updatedUser);

    try {
      await updateUser(updatedUser).unwrap();
      toast.success("Profile updated successfully!");

      closeModal();
    } catch (error) {
      toast.error("Failed to update profile. Please try again!", {
        removeDelay: 10000,
      });
      console.error("Profile updation error:", error);
    }
  };

  const defaultValues: UpdateUser = {
    f_name: user.f_name,
    l_name: user.l_name,
    email: user.email,
    phone: user.phone,
  };

  return (
    <Modal modalId="editProfileModal">
      <div className="p-3 border-b shadow-md">
        <h3 className="text-lg font-medium">Update Your Profile</h3>
      </div>

      <EditProfileForm
        isSubmitting={isUpdating}
        defaultValues={defaultValues}
        onSubmit={handleUpdateUser}
      />
    </Modal>
  );
};

export default EditProfileModal;
