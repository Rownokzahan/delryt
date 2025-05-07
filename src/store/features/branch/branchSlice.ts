import { Branch } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BranchState {
  currentBranch: {
    branch: Branch | null;
    isLoading: boolean;
  };
}

const initialState: BranchState = {
  currentBranch: {
    branch: null,
    isLoading: true,
  },
};

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {
    initializeCurrentBranch: (
      state,
      { payload }: PayloadAction<Branch | null>
    ) => {
      state.currentBranch.branch = payload;
      state.currentBranch.isLoading = false;
    },

    updateCurrentBranch: (state, { payload }: PayloadAction<Branch>) => {
      const branch = payload;
      state.currentBranch.branch = branch;

      const branchId = branch.id.toString().trim();
      localStorage.setItem("branch-id", branchId);
    },
  },
});

export const { initializeCurrentBranch, updateCurrentBranch } =
  branchSlice.actions;

export default branchSlice.reducer;
