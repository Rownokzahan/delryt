"use client";

import { store } from "@/store/store";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import LoadingPage from "@/components/ui/LoadingPage";
import { useGetBranchListQuery } from "@/store/branch/branchApi";
import { initializeCurrentBranch } from "@/store/branch/branchSlice";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <StoreInitializerWrapper>{children}</StoreInitializerWrapper>
    </Provider>
  );
};

const StoreInitializerWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const { data: branches = [], isLoading: isBranchesLoading } =
    useGetBranchListQuery();

  // Initialize the current branch once the branches is loaded
  useEffect(() => {
    if (isBranchesLoading) {
      return;
    }

    const branchId = localStorage.getItem("branchId");
    if (!branchId) {
      return;
    }

    const branch =
      branches.find((branch) => branch.id === Number(branchId)) ?? null;

    dispatch(initializeCurrentBranch(branch));
  }, [dispatch, branches, isBranchesLoading]);

  if (isBranchesLoading) {
    return <LoadingPage />;
  }

  return children;
};

export default StoreProvider;
