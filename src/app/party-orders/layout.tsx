import NavbarMobileFixed from "@/components/NavbarMobileFixed";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { ReactNode } from "react";
import { PiPhoneCall } from "react-icons/pi";

const PartyOrdersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="shadow-md sticky z-10 top-0 bg-uiWhite">
        <div className="ui-container py-3 flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-2">
            <PiPhoneCall className="text-2xl text-primary" />
            <div className="text-sm text-black">
              <p className="text-uiBlack/90">Call us at</p>
              <p>+8801700000011</p>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="p-4">
        <p className="text-center text-sm sm:text-base">
          Copyright © {new Date().getFullYear()}. Delryt - All Rights Reserved
          <Link href={"/terms"} className="mx-2 underline">
            Terms of use
          </Link>
          Privacy
        </p>
      </footer>

      <NavbarMobileFixed />
    </>
  );
};

export default PartyOrdersLayout;
