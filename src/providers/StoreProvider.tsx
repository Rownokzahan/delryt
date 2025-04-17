"use client";

import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import LoadingPage from "@/components/ui/LoadingPage";
import { useGetBranchListQuery } from "@/store/branch/branchApi";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <StoreInitializerWrapper>{children}</StoreInitializerWrapper>
    </Provider>
  );
};

const StoreInitializerWrapper = ({ children }: { children: ReactNode }) => {
  // Wait for the branches list to load and initialize the current branch before rendering the app
  const { isLoading: isBranchesLoading } = useGetBranchListQuery();

  if (isBranchesLoading) {
    return <LoadingPage />;
  }

  return children;
};

export default StoreProvider;
