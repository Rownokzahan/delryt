import { create } from "zustand";
import { Branch } from "@/types";

type BranchState = {
  currentBranch: Branch | null;
  isLoading: boolean;

  actions: {
    setCurrentBranch: (branch: Branch) => void;
    setLoading: (loading: boolean) => void;
  };
};

export const useBranchStore = create<BranchState>((set) => ({
  currentBranch: null,
  isLoading: false,

  actions: {
    setCurrentBranch: (branch: Branch) => set({ currentBranch: branch }),
    setLoading: (loading: boolean) => set({ isLoading: loading }),
  },
}));
