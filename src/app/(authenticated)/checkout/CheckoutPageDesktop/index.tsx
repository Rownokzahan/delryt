import CartSummaryHeader from "./CartSummaryHeader";
import NavbarCheckoutDesktop from "./NavbarCheckoutDesktop";
import ChangeDeliveryTime from "../components/ChangeDeliveryTime";
import ChooseAddress from "../components/ChooseAddress";
import ChoosePayment from "../components/ChoosePayment";
import CheckoutDetails from "../components/CheckoutDetails";

const CheckoutPageDesktop = () => {
  return (
    <>
      <NavbarCheckoutDesktop />

      <main className="bg-gray-200">
        <div className="ui-container py-6 flex gap-8">
          <div className="flex-1 space-y-4">
            <ChangeDeliveryTime />
            <ChooseAddress />
            <ChoosePayment />
          </div>

          <div className="w-[47%] lg:w-[40%] h-[calc(100dvh-177px)] overflow-hidden rounded-xl bg-gray-100">
            <CartSummaryHeader />

            <div
              className="p-4 h-[calc(100dvh-300px)] overflow-y-auto space-y-4"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#c60e0e transparent",
              }}
            >
              <CheckoutDetails />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutPageDesktop;
