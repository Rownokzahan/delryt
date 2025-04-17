import AuthRoute from "@/routeGuards/AuthRoute";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return <AuthRoute>{children}</AuthRoute>;
};

export default AuthenticatedLayout;
