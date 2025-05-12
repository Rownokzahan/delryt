"use client";

import useCheckoutState from "@/hooks/useCheckoutState";
import CartView from "./CartView";
import CheckoutView from "./CheckoutView";
import { useEffect } from "react";

const CheckoutMobile = () => {
  const { mobileCheckoutView, resetMobileCheckoutView } = useCheckoutState();

  useEffect(() => {
    resetMobileCheckoutView();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:hidden min-h-[calc(100dvh-56px)] ui-container">
      {mobileCheckoutView === "cart" ? <CartView /> : <CheckoutView />}
    </div>
  );
};

export default CheckoutMobile;
