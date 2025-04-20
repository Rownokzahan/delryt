"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import useReturnToPath from "@/hooks/useReturnToPath";
import useUser from "@/hooks/useUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const { user, isLoading } = useUser();
  const { setReturnToPath } = useReturnToPath();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setReturnToPath(pathname);
  }, [pathname, setReturnToPath]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return null;
  }

  return children;
};

export default AuthRoute;
