"use client";

import { FiMenu } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import useModalById from "@/hooks/useModalById";
import LogoWithBranchLink from "../shared/LogoWithBranchLink";
import ProfileOrSignInButton from "./ProfileOrSignInButton";
import CallUsInfo from "@/components/ui/CallUsInfo";
import CartButtonLink from "./CartButtonLink";

const NavbarDesktop = () => {
  const { openModal: openSearchModal } = useModalById("searchModal");
  const { openModal: openSidebar } = useModalById("menuSidebar");

  return (
    <div className="hidden sm:block h-nav-desktop border-b border-primary/20 shadow-xs bg-uiWhite">
      <div className="h-full ui-container flex justify-between items-center">
        {/* Logo with branch */}
        <LogoWithBranchLink />

        {/* Action buttons and links */}
        <div className="flex items-center justify-items-end gap-6 text-primary">
          <CallUsInfo />

          {/* Search Button */}
          <button
            onClick={openSearchModal}
            className="flex flex-col items-center"
            aria-label="Search"
          >
            <RiSearchLine className="text-xl" />
            <span className="text-xs">Search</span>
          </button>

          <CartButtonLink />

          {/* Profile or Sign In Button */}
          <ProfileOrSignInButton />

          {/* Sidebar Toggle (Profile) */}
          <button
            onClick={openSidebar}
            className="flex flex-col items-center"
            aria-label="My Profile"
          >
            <FiMenu className="text-xl" />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
