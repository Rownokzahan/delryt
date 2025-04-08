import { updateCurrentBranch as updateCurrentBranchAction } from "@/store/branch/branchSlice";
import { RootState } from "@/store/store";
import { Branch } from "@/types";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const useCurrentBranch = () => {
  const { branch: currentBranch, isLoading } = useSelector(
    (state: RootState) => state.branch.currentBranch
  );
  const dispatch = useDispatch();

  const updateCurrentBranch = (branch: Branch) => {
    dispatch(updateCurrentBranchAction(branch));
    redirect("/");
  };

  return {
    currentBranch,
    isLoading,
    updateCurrentBranch,
  };
};

export default useCurrentBranch;
