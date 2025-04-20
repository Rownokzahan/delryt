"use client";

import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import useModalById from "@/hooks/useModalById";
import LogoWithBranchLink from "../shared/LogoWithBranchLink";
import useUser from "@/hooks/useUser";

const NavbarDesktop = () => {
  const { openModal: openSearchModal } = useModalById("searchModal");
  const { openModal: openAuthModal } = useModalById("authModal");
  const { openModal: openSidebar } = useModalById("menuSidebar");
  const { user } = useUser();

  return (
    <div className="border-b border-primary/20 shadow-xs bg-uiWhite">
      <div className="ui-container py-3 flex justify-between items-center">
        {/* Logo with branch */}
        <LogoWithBranchLink />

        {/* Action buttons and links */}
        <div className="flex items-center justify-items-end gap-6 text-primary">
          {/* Contact Information */}
          <div className="flex items-center gap-1">
            <PiPhoneCall className="text-xl" />
            <div className="grid text-sm text-black">
              <span>Call us at</span>
              <span className="font-semibold">+8801700000011</span>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={openSearchModal}
            className="flex flex-col items-center"
            aria-label="Search"
          >
            <RiSearchLine className="text-xl" />
            <span className="text-xs">Search</span>
          </button>

          {/* Cart Link */}
          <Link
            href={"/checkout"}
            className="flex flex-col items-center"
            aria-label="Cart"
          >
            <FiShoppingCart className="text-xl" />
            <span className="text-xs">Cart</span>
          </Link>

          {user ? (
            <Link
              href={"/profile"}
              className="px-3 py-2 border-x border-primary/10 flex flex-row items-center gap-2"
            >
              <FaCircleUser className="text-3xl text-gray-300" />
              <span className="text-sm font-semibold">{user.f_name}</span>
            </Link>
          ) : (
            <button
              onClick={openAuthModal}
              className="px-3 py-2 border-x border-primary/10 flex flex-row items-center gap-2"
              aria-label="Sign In"
            >
              <FaCircleUser className="text-3xl text-gray-300" />
              <span className="text-sm font-semibold">Sign In</span>
            </button>
          )}

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
