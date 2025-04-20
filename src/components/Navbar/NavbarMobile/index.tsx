"use client";

import useModalById from "@/hooks/useModalById";
import LogoWithBranchLink from "../shared/LogoWithBranchLink";
import useUser from "@/hooks/useUser";
import { FiMenu } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavbarMobile = () => {
  const { openModal: openAuthModal } = useModalById("authModal");
  const { openModal: openSidebar } = useModalById("menuSidebar");
  const { user } = useUser();

  return (
    <div className="ui-container py-3 shadow-xs flex justify-between items-center">
      <LogoWithBranchLink logoSize="small" />

      <div className="flex items-center gap-2">
        {!user && (
          <button
            onClick={openAuthModal}
            className="h-max px-3 py-1 border border-primary text-primary rounded-sm shadow-xs flex items-center gap-1"
          >
            <span className="font-semibold text-sm">Sign in</span>
          </button>
        )}

        <button
          onClick={openSidebar}
          className="flex flex-col items-center"
          aria-label="Open Menu"
        >
          {user ? (
            <FiMenu className="text-xl" />
          ) : (
            <BsThreeDotsVertical className="text-lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
