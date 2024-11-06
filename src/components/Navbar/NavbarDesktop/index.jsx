"use client";
import Link from "next/link";
import Logo from "@/components/Logo";
import { FaCircleUser } from "react-icons/fa6";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";

const NavbarDesktop = ({ openSidebar, openSignInModal, openSearchModal }) => {
  return (
    <div className="border-b border-primary-dark shadow-sm">
      <div className="ui-container py-3 flex justify-between items-center">
        {/* Logo */}
        <Logo />

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
          >
            <RiSearchLine className="text-xl" />
            <span className="text-xs">Search</span>
          </button>

          {/* Cart Link */}
          <Link href={"/"} className="flex flex-col items-center">
            <FiShoppingCart className="text-xl" />
            <span className="text-xs">Cart</span>
          </Link>

          {/* Sign-In Button */}
          <button
            onClick={openSignInModal}
            className="px-3 py-2 border-x border-primary-dark flex flex-row items-center gap-1"
          >
            <FaCircleUser className="text-3xl text-ui-gray-light" />
            <span className="text-sm font-semibold">Sign In</span>
          </button>

          {/* Sidebar Toggle (Profile) */}
          <button onClick={openSidebar} className="flex flex-col items-center">
            <FiMenu className="text-xl" />
            <span className="text-xs">My Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
