"use client";

import CustomTipModal from "@/modals/CustomTipModal";
import CouponsModal from "@/modals/CouponsModal";
import CheckoutProvider from "./CheckoutProvider";
import CheckoutContent from "./components/CheckoutContent";
import ChooseAddressModal from "@/modals/ChooseAddressModal";

const CheckoutPage = () => {
  return (
    <CheckoutProvider>
      <CheckoutContent />

      {/* Modals */}
      <ChooseAddressModal />
      <CustomTipModal />
      <CouponsModal />
    </CheckoutProvider>
  );
};

export default CheckoutPage;
