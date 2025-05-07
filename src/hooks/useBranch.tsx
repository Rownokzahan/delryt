import { updateCurrentBranch as updateCurrentBranchAction } from "@/store/features/branch/branchSlice";
import { RootState } from "@/store/store";
import { Branch } from "@/types";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "./useCart";
import useModalById from "./useModalById";
import { initializeCart } from "@/store/features/cart/cartSlice";

const useBranch = () => {
  const { branch: currentBranch, isLoading } = useSelector(
    (state: RootState) => state.branch.currentBranch
  );

  const { openModalWithData } = useModalById("confirmBranchSwitchModal");
  const { cart } = useCart();
  const dispatch = useDispatch();

  const confirmBranchSwitch = (branch: Branch) => {
    dispatch(updateCurrentBranchAction(branch));
    initializeCart();
    redirect("/");
  };

  const updateCurrentBranch = (branch: Branch) => {
    if (cart.length !== 0 && currentBranch?.id !== branch.id) {
      openModalWithData(branch);
      return;
    }
    confirmBranchSwitch(branch);
  };

  return {
    currentBranch,
    isLoading,
    updateCurrentBranch,
    confirmBranchSwitch,
  };
};

export default useBranch;
