import CheckoutNavbarDesktop from "./CheckoutNavbarDesktop";
import CheckoutNavbarMobile from "./CheckoutNavbarMobile";

const CheckoutNavbar = () => {
  return (
    <header>
      <CheckoutNavbarDesktop />
      <CheckoutNavbarMobile />
    </header>
  );
};

export default CheckoutNavbar;
