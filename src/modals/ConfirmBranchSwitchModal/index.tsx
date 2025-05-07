"use client";

import Button from "@/components/ui/Button";
import Modal from "../Modal";
import useModalById from "@/hooks/useModalById";
import useBranch from "@/hooks/useBranch";

const ConfirmBranchSwitchModal = () => {
  const {
    isModalOpen,
    closeModal,
    modalData: branch,
  } = useModalById("confirmBranchSwitchModal");

  const { confirmBranchSwitch } = useBranch();

  if (!isModalOpen) {
    return;
  }

  if (!branch) {
    console.warn("Branch is missing in ConfirmBranchSwitchModal.", {
      branch,
    });

    return null;
  }

  const handleBranchSwitch = () => {
    closeModal();
    confirmBranchSwitch(branch);
  };

  return (
    <Modal modalId="confirmBranchSwitchModal" containerClasses="p-6">
      <h3 className="text-xl font-medium">Switch Branch?</h3>

      <div className="mt-4 space-y-2">
        <p className="text-uiBlack-light">
          You have items in your cart. Switching branches will update your cart.
          If you return to this branch later, your cart will be restored. Do you
          want to proceed?
        </p>
      </div>

      <div className="mt-5 flex justify-end gap-4 text-lg">
        <button className="font-medium py-3 px-8" onClick={closeModal}>
          Cancel
        </button>

        <Button variant="primary" onClick={handleBranchSwitch}>
          Yes, Switch Branch
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmBranchSwitchModal;
