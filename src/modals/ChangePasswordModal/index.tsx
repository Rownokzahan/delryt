"use client";

import ChangePasswordForm from "@/forms/profile/ChangePasswordForm";
import Modal from "../Modal";
import useUser from "@/hooks/useUser";
import useModalById from "@/hooks/useModalById";
import { useUpdateUserMutation } from "@/store/features/user/userApi";
import toast from "react-hot-toast";

const ChangePasswordModal = () => {
  const { isModalOpen, closeModal } = useModalById("changePasswordModal");
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const { user } = useUser();

  if (!isModalOpen) {
    return null;
  }

  if (!user) {
    console.log("User Not Found From ChangePasswordModal");
    return null;
  }

  const { f_name, l_name, phone, email } = user;

  const handleChangePassword = async (password: string) => {
    const updatedUser = { f_name, l_name, phone, email, password };

    try {
      await updateUser(updatedUser).unwrap();
      toast.success("Changed password successfully!");

      closeModal();
    } catch (error) {
      toast.error("Failed to change password. Please try again!", {
        removeDelay: 10000,
      });
      console.error("Changing password error:", error);
    }
  };

  return (
    <Modal modalId="changePasswordModal">
      <div className="p-3 border-b shadow-md">
        <h3 className="text-lg font-medium">Change Your Password</h3>
      </div>

      <ChangePasswordForm
        onSubmit={handleChangePassword}
        isSubmitting={isUpdating}
      />
    </Modal>
  );
};

export default ChangePasswordModal;
