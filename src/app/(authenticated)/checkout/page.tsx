"use client";

import CouponsModal from "@/modals/CouponsModal";
import CheckoutContent from "./components/CheckoutContent";
import ChooseAddressModal from "@/modals/ChooseAddressModal";

const CheckoutPage = () => {
  return (
    <>
      <CheckoutContent />

      {/* Modals */}
      <ChooseAddressModal />
      <CouponsModal />
    </>
  );
};

export default CheckoutPage;
