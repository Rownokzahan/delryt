"use client";

import useCheckoutState from "@/hooks/useCheckoutState";
import CartView from "./CartView";
import CheckoutView from "./CheckoutView";

const CheckoutMobile = () => {
  const { mobileCheckoutView } = useCheckoutState();

  return (
    <div className="md:hidden min-h-[calc(100dvh-56px)] ui-container">
      {mobileCheckoutView === "cart" ? <CartView /> : <CheckoutView />}
    </div>
  );
};

export default CheckoutMobile;
