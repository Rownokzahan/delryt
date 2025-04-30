import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";

const CheckoutNavbarDesktop = () => {
  return (
    <div className="hidden sm:block">
      <nav className="border-b border-primary/20 shadow-xs">
        <div className="ui-container py-3 flex justify-between items-center">
          <div className="flex items-center justify-items-end gap-6">
            <Logo />

            <h3 className="py-1 ps-6 border-s border-primary/10 font-semibold text-2xl">
              Secure Checkout
            </h3>
          </div>

          <div className="flex items-center justify-items-end gap-6">
            <div className="flex items-center gap-1">
              <PiPhoneCall className="text-xl text-primary" />
              <div className="grid text-sm text-black">
                <span>Call us at</span>
                <span className="font-semibold">+8801700000011</span>
              </div>
            </div>

            <div className="ps-6 border-s border-primary/10">
              <Link
                href={"/profile"}
                className="flex flex-row items-center gap-2"
                aria-label="Sign In"
              >
                <FaCircleUser className="text-4xl text-gray-300" />
                <span className="w-20 truncate font-semibold text-primary">
                  Rownok Zahan
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-4 bg-primary/5">
        <div className="ui-container">
          <Link href={"/"} className="text-uiBlack-light">
            Home
          </Link>
          <span className="text-uiBlack-light mx-2">{">"}</span>
          <Link href={"/checkout"}>Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutNavbarDesktop;