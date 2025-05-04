"use client";

import Link from "next/link";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import useModalById from "@/hooks/useModalById";
import LogoWithBranchLink from "../shared/LogoWithBranchLink";
import ProfileOrSignInButton from "./ProfileOrSignInButton";
import { useCart } from "@/hooks/useCart";

const NavbarDesktop = () => {
  const { openModal: openSearchModal } = useModalById("searchModal");
  const { openModal: openSidebar } = useModalById("menuSidebar");
  const { cart } = useCart();

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
            className="flex flex-col items-center relative"
            aria-label="Cart"
          >
            <FiShoppingCart className="text-xl" />
            <span className="text-xs">Cart</span>

            {cart.length > 0 && (
              <span className="size-[15px] bg-primary rounded-full grid place-items-center absolute -top-1 -right-2 text-[10px] text-uiWhite">
                {cart.length}
              </span>
            )}
          </Link>

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
