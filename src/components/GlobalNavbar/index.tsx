"use client";

import useModalById from "@/hooks/useModalById";
import { FiMenu } from "react-icons/fi";
import Logo from "../ui/Logo";
import CallUsInfo from "../ui/CallUsInfo";

const GlobalNavbar = () => {
  const { openModal: openSidebar } = useModalById("menuSidebar");

  return (
    <nav className="h-nav-mobile sm:h-nav-desktop shadow-md sticky z-10 top-0 bg-uiWhite">
      <div className="h-full ui-container flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-6">
          <CallUsInfo />

          <button
            onClick={openSidebar}
            className="flex flex-col items-center text-primary"
            aria-label="My Profile"
          >
            <FiMenu className="text-xl" />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNavbar;
