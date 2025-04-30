import CheckoutNavbar from "./components/CheckoutNavbar";

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

const CheckoutLayout = ({ children }: CheckoutLayoutProps) => {
  return (
    <>
      <CheckoutNavbar />
      {children}
    </>
  );
};

export default CheckoutLayout;
