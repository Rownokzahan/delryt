"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useCurrentBranch from "@/hooks/useCurrentBranch";

interface BranchRouteProps {
  children: React.ReactNode;
}

const BranchRoute = ({ children }: BranchRouteProps) => {
  const { currentBranch, isLoading } = useCurrentBranch();
  const currentPath = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !isLoading &&
      currentBranch === null &&
      currentPath !== "/branch-list"
    ) {
      router.push("/branch-list");
    }
  }, [isLoading, currentBranch, currentPath, router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  // prevent children from rendering while redirecting
  if (currentBranch === null && currentPath !== "/branch-list") {
    return null;
  }

  return children;
};

export default BranchRoute;
