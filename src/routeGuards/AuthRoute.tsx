"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import useReturnToPath from "@/hooks/useReturnToPath";
import useUser from "@/hooks/useUser";
import { redirect, usePathname } from "next/navigation";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const { user, isLoading } = useUser();
  const { setReturnToPath } = useReturnToPath();

  const pathname = usePathname();
  setReturnToPath(pathname);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    redirect("/login");
  }

  return children;
};

export default AuthRoute;
