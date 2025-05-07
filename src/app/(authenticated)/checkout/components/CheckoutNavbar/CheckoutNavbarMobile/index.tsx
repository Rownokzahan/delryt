import Logo from "@/components/ui/Logo";

const CheckoutNavbarMobile = () => {
  return (
    <header className="sm:hidden sticky z-10 top-0 bg-uiWhite">
      <nav className="py-3 border-b">
        <div className="ui-container flex items-center gap-4">
          <Logo size="small" />
          <h2 className="ps-3 border-s border-gray-300 font-medium text-xl">
            Checkout
          </h2>
        </div>
      </nav>
    </header>
  );
};

export default CheckoutNavbarMobile;