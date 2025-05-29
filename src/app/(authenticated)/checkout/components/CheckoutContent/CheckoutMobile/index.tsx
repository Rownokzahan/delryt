"use client";

import useCheckoutState from "@/hooks/useCheckoutState";
import CartView from "./CartView";
import CheckoutView from "./CheckoutView";

const CheckoutMobile = () => {
  const { mobileCheckoutView } = useCheckoutState();

  return (
    <div className="md:hidden min-h-screen-nav-mobile ui-container">
      {mobileCheckoutView === "cart" ? <CartView /> : <CheckoutView />}
    </div>
  );
};

export default CheckoutMobile;
