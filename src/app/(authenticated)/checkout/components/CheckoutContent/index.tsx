"use client";

import CheckoutDesktop from "./CheckoutDesktop";
import CheckoutMobile from "./CheckoutMobile";
import Button from "@/components/ui/Button";
import { GrCart } from "react-icons/gr";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/stores/useCartStore";
import { useCheckoutActions } from "@/stores/useCheckoutStore";

const CheckoutContent = () => {
  const { cart } = useCart();
  const { resetCheckoutExceptTime } = useCheckoutActions();

  useEffect(() => {
    resetCheckoutExceptTime();

    return resetCheckoutExceptTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cart.length === 0) {
    return (
      <main className="h-[calc(100dvh-var(--h-nav-mobile))] sm:h-[calc(100dvh-var(--h-nav-desktop)-56px)] grid place-content-center">
        <div className="ui-container flex flex-col items-center text-center">
          <GrCart className="mb-2 text-6xl" />

          <h2 className="mb-3 text-3xl font-medium">Empty Cart!</h2>
          <p className="mb-8 text-uiBlack-light">
            Looks like you haven’t made your choice yet.
          </p>

          <Link href={"/"}>
            <Button>Browse Menu</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-200">
      <CheckoutMobile />
      <CheckoutDesktop />
    </main>
  );
};

export default CheckoutContent;
