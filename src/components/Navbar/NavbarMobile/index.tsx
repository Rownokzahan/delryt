import { FiHome, FiMenu, FiShoppingCart } from "react-icons/fi";
import { PiUserCircle } from "react-icons/pi";
import NavItem from "./NavItem";
import React, { FC } from "react";
import LogoWithBranchLink from "../LogoWithBranchLink/LogoWithBranchLink";
import { FaRegHeart } from "react-icons/fa6";

type NavbarMobileProps = {
  openSidebar: () => void;
  openSignInModal: () => void;
};

const NavbarMobile: FC<NavbarMobileProps> = ({
  openSidebar,
  openSignInModal,
}) => {
  return (
    <>
      {/* Top Navbar with Logo and Login Button */}
      <div className="ui-container py-3 shadow-sm flex justify-between items-center">
        <LogoWithBranchLink logoSize="small" />

        <button
          onClick={openSignInModal}
          className="h-max px-2 py-1 border rounded shadow-sm flex items-center gap-1"
        >
          <PiUserCircle className="text-xl text-primary" />
          <span className="font-semibold text-sm">Login</span>
        </button>
      </div>

      {/* Sticky Bottom Navigation Bar */}
      <div
        className="w-full ui-container py-3 fixed bottom-0 left-0 z-40 bg-white flex justify-between items-center text-ui-gray text-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px -4px 4px 0px" }}
      >
        <NavItem href={"/"} icon={FiHome} label={"Home"} />

        <NavItem
          href={"/wishlist"}
          icon={FaRegHeart}
          label={"Wishlist"}
          badge={0}
        />
        <NavItem
          href={"/cart"}
          icon={FiShoppingCart}
          label={"Cart"}
          badge={0}
        />

        <NavItem
          isButton={true}
          onClick={openSidebar}
          icon={FiMenu}
          label={"Menu"}
        />
      </div>
    </>
  );
};

export default NavbarMobile;
