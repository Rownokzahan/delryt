import CheckoutNavbar from "./components/CheckoutNavbar";

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

const CheckoutLayout = ({ children }: CheckoutLayoutProps) => {
  return (
    <>
      <CheckoutNavbar />
      <main className="bg-gray-200">{children}</main>
    </>
  );
};

export default CheckoutLayout;
