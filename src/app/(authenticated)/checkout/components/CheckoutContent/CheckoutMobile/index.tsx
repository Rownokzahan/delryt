"use client";

import CartView from "./CartView";
import CheckoutView from "./CheckoutView";
import { useMobileCheckoutView } from "@/stores/useCheckoutStore";

const CheckoutMobile = () => {
  const mobileCheckoutView = useMobileCheckoutView();

  return (
    <div className="md:hidden min-h-screen-nav-mobile ui-container">
      {mobileCheckoutView === "cart" ? <CartView /> : <CheckoutView />}
    </div>
  );
};

export default CheckoutMobile;
