"use client";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { FC } from "react";
import clsx from "clsx";
import { FaUserCircle } from "react-icons/fa";
import LogoWithBranchLink from "../LogoWithBranchLink/LogoWithBranchLink";

interface NavbarDesktopProps {
  openSidebar: () => void;
  openSignInModal: () => void;
  openSearchModal: () => void;
}

const NavbarDesktop: FC<NavbarDesktopProps> = ({
  openSidebar,
  openSignInModal,
  openSearchModal,
}) => {
  return (
    <div className="shadow-sm">
      <div className="ui-container py-3 flex justify-between items-center">
        <LogoWithBranchLink />

        {/* Action buttons and links */}
        <div className="flex items-center justify-items-end gap-10">
          {/* Search Button */}
          <button
            onClick={openSearchModal}
            className="px-4 py-2 border border-primary-light/30 rounded-full flex items-center gap-2 text-uiBlack-light"
            aria-label="Search"
          >
            <RiSearchLine className="" />
            <span className="text-xs">Search ...</span>
          </button>

          {/* Wishlist Link */}
          <Link href={"/wishlist"} aria-label="wishlist" className="relative">
            <FaRegHeart className="text-xl" />
            <div
              className={clsx(
                "size-4 bg-primary rounded-full shadow",
                "flex justify-center items-center",
                "absolute -top-2 -right-2"
              )}
            >
              <span className="text-white text-xs">{0}</span>
            </div>
          </Link>

          {/* Cart Link */}
          <Link href={"/cart"} aria-label="cart" className="relative">
            <FiShoppingCart className="text-xl" />
            <div
              className={clsx(
                "size-4 bg-primary rounded-full shadow",
                "flex justify-center items-center",
                "absolute -top-2 -right-2"
              )}
            >
              <span className="text-white text-xs">{0}</span>
            </div>
          </Link>

          {/* Sign-In Button */}
          <button
            onClick={openSignInModal}
            className="px-3 py-2 border-x border-primary/20 flex items-center gap-2"
            aria-label="Sign In"
          >
            <FaUserCircle className="text-uiBlack/30 text-xl" />
            <span className="text-sm font-medium text-primary"> Sign in</span>
          </button>

          {/* Sidebar Toggle (Profile) */}
          <button
            onClick={openSidebar}
            className="text-xl text-primary"
            aria-label="My Profile"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
