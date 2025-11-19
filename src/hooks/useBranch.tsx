import { updateCurrentBranch as updateCurrentBranchAction } from "@/store/features/branch/branchSlice";
import { AppDispatch, resetBranchRelatedState, RootState } from "@/store/store";
import { Branch } from "@/types";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import useModalById from "./useModalById";
import { useCart } from "@/stores/useCartStore";

const useBranch = () => {
  const { branch: currentBranch, isLoading } = useSelector(
    (state: RootState) => state.branch.currentBranch
  );

  const { openModalWithData } = useModalById("confirmBranchSwitchModal");
  const { cart } = useCart();

  const dispatch = useDispatch<AppDispatch>();

  const confirmBranchSwitch = (branch: Branch) => {
    dispatch(updateCurrentBranchAction(branch));
    dispatch(resetBranchRelatedState());
  };

  const updateCurrentBranch = (branch: Branch) => {
    if (cart.length !== 0 && currentBranch?.id !== branch.id) {
      openModalWithData(branch);
      return;
    }
    confirmBranchSwitch(branch);
    redirect("/");
  };

  return {
    currentBranch,
    isLoading,
    updateCurrentBranch,
    confirmBranchSwitch,
  };
};

export default useBranch;
