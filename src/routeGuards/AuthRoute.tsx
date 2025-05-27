"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import useUser from "@/hooks/useUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !user) {
      // Avoid redirecting if already on /login
      if (!pathname.startsWith("/login")) {
        router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      }
    }
  }, [isLoading, user, pathname, router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return null;
  }

  return children;
};

export default AuthRoute;
