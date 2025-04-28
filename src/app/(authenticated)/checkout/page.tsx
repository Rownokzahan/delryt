import CheckoutPageDesktop from "./CheckoutPageDesktop";
import CheckoutPageMobile from "./CheckoutPageMobile";
import CustomTipModal from "@/modals/CustomTipModal";
import CouponsModal from "@/modals/CouponsModal";

const CheckoutPage = () => {
  return (
    <>
      <div className="sm:hidden">
        <CheckoutPageMobile />
      </div>

      <div className="hidden sm:block">
        <CheckoutPageDesktop />
      </div>

      {/* Modals */}
      <CustomTipModal />
      <CouponsModal />
    </>
  );
};

export default CheckoutPage;
