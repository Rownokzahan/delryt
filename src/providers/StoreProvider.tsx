"use client";

import { store } from "@/store/store";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import LoadingPage from "@/components/ui/LoadingPage";
import { useGetBranchListQuery } from "@/store/features/branch/branchApi";
import { useGetUserQuery } from "@/store/features/user/userApi";
import { useCart } from "@/hooks/useCart";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <StoreInitializerWrapper>{children}</StoreInitializerWrapper>
    </Provider>
  );
};

const StoreInitializerWrapper = ({ children }: { children: ReactNode }) => {
  // Wait for the branches list to load and initialize the current branch
  const { isLoading: isBranchesLoading } = useGetBranchListQuery();

  // Wait for the user to load
  const { isLoading: isUserLoading } = useGetUserQuery();

  const { initializeCart } = useCart();

  useEffect(() => {
    initializeCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isBranchesLoading || isUserLoading) {
    return <LoadingPage />;
  }

  return children;
};

export default StoreProvider;
