import { useCart } from "@/hooks/useCart";
import CheckoutDesktop from "./CheckoutDesktop";
import CheckoutMobile from "./CheckoutMobile";
import Button from "@/components/ui/Button";
import { GrCart } from "react-icons/gr";
import Link from "next/link";

const CheckoutContent = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-[calc(100dvh-60px)] sm:min-h-[calc(100dvh-130px)] grid place-content-center">
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
