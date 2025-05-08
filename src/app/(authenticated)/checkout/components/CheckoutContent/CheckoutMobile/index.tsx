"use client";

import useCheckoutStates from "@/hooks/useCheckoutStates";
import CartView from "./CartView";
import CheckoutView from "./CheckoutView";
import { useEffect } from "react";

const CheckoutMobile = () => {
  const { mobileCheckoutView, resetMobileCheckoutView } = useCheckoutStates();

  useEffect(() => {
    resetMobileCheckoutView();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:hidden ui-container">
      {mobileCheckoutView === "cart" ? <CartView /> : <CheckoutView />}
    </div>
  );
};

export default CheckoutMobile;
