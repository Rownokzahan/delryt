"use client";

import CustomTipModal from "@/modals/CustomTipModal";
import CouponsModal from "@/modals/CouponsModal";
import CheckoutProvider from "./CheckoutProvider";
import CheckoutContent from "./components/CheckoutContent";

const CheckoutPage = () => {
  return (
    <CheckoutProvider>
      <CheckoutContent />

      {/* Modals */}
      <CustomTipModal />
      <CouponsModal />
    </CheckoutProvider>
  );
};

export default CheckoutPage;
