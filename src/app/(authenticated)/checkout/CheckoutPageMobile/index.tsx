import Logo from "@/components/ui/Logo";
import ChangeDeliveryTime from "../components/ChangeDeliveryTime";
import FixedBottomBar from "./FixedBottomBar";
import CheckoutDetails from "../components/CheckoutDetails";

const CheckoutPageMobile = () => {
  return (
    <>
      <header className="sticky z-10 top-0 bg-uiWhite">
        <nav className="py-3 border-b">
          <div className="ui-container flex items-center gap-4">
            <Logo size="small" />
            <h2 className="ps-3 border-s border-gray-300 font-medium text-xl">
              Checkout
            </h2>
          </div>
        </nav>
      </header>

      <main className="bg-gray-200 ui-container pt-3 pb-20 space-y-4">
        <ChangeDeliveryTime />
        <CheckoutDetails />
      </main>

      <FixedBottomBar />
    </>
  );
};

export default CheckoutPageMobile;
