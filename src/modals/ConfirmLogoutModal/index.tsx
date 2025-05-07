"use client";

import { useLogoutMutation } from "@/store/features/auth/authApi";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import useModalById from "@/hooks/useModalById";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

const ConfirmLogoutModal = () => {
  const { isModalOpen, closeModal } = useModalById("confirmLogoutModal");
  const [logout] = useLogoutMutation();
  const router = useRouter();

  if (!isModalOpen) {
    return null;
  }

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    closeModal();
    router.push("/");
  };

  return (
    <Modal modalId="confirmLogoutModal" containerClasses="p-6">
      <h3 className="text-xl font-medium">Confirm Logout</h3>

      <div className="mt-4">
        <p>Are you sure you want to log out?</p>
      </div>

      <div className="mt-5 flex justify-end gap-4 text-lg">
        <button className="font-medium py-3 px-8" onClick={closeModal}>
          Cancel
        </button>

        <Button variant="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmLogoutModal;
