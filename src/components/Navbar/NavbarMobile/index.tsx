"use client"

import { PiUserCircle } from "react-icons/pi";
import useModalById from "@/hooks/useModalById";
import LogoWithBranchLink from "../shared/LogoWithBranchLink";

const NavbarMobile = () => {
  const { openModal: openAuthModal } = useModalById("authModal");

  return (
    <div className="ui-container py-3 shadow-xs flex justify-between items-center">
      <LogoWithBranchLink logoSize="small" />

      <button
        onClick={openAuthModal}
        className="h-max px-2 py-1 border rounded-sm shadow-xs flex items-center gap-1"
      >
        <PiUserCircle className="text-xl text-primary" />
        <span className="font-semibold text-sm">Login</span>
      </button>
    </div>
  );
};

export default NavbarMobile;
