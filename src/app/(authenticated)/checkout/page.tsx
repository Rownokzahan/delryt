"use client";

import CustomTipModal from "@/modals/CustomTipModal";
import CouponsModal from "@/modals/CouponsModal";
import CheckoutContent from "./components/CheckoutContent";
import ChooseAddressModal from "@/modals/ChooseAddressModal";

const CheckoutPage = () => {
  return (
    <>
      <CheckoutContent />

      {/* Modals */}
      <ChooseAddressModal />
      <CustomTipModal />
      <CouponsModal />
    </>
  );
};

export default CheckoutPage;
