"use client";

import Logo from "@/components/ui/Logo";
import {
  useCheckoutActions,
  useMobileCheckoutView,
} from "@/stores/useCheckoutStore";
import clsx from "clsx";
import { MdArrowBackIosNew } from "react-icons/md";

const CheckoutNavbarMobile = () => {
  const mobileCheckoutView = useMobileCheckoutView();
  const { setMobileCheckoutView } = useCheckoutActions();

  const isCartView = mobileCheckoutView === "cart";

  return (
    <header className="md:hidden h-nav-mobile sticky z-10 top-0">
      <nav className="h-full ui-container border-b shadow-sm bg-uiWhite flex items-center">
        {isCartView ? (
          <Logo className="me-4" />
        ) : (
          <button
            onClick={() => setMobileCheckoutView("cart")}
            className="h-full pe-2 ps-0 text-primary"
          >
            <MdArrowBackIosNew />
          </button>
        )}

        <h3
          className={clsx(
            "ps-3 font-medium text-xl",
            isCartView && "border-s border-gray-300"
          )}
        >
          {isCartView ? "Cart" : "Checkout"}
        </h3>
      </nav>
    </header>
  );
};

export default CheckoutNavbarMobile;
