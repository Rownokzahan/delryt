"use client";

import { FiHome, FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import NavItem from "./NavItem";
import useSidebarById from "@/hooks/useSidebarById";

const NavbarMobileFixed = () => {
  const { openSidebar } = useSidebarById("myProfileSidebar");

  const isUserLoggedIn = true;

  return (
    <div className="sm:hidden pb-[60px] sm:pb-0">
      <nav
        className="w-full h-[60px] ui-container py-3 fixed bottom-0 left-0 z-40 bg-white flex justify-between items-center text-ui-gray text-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px -4px 4px 0px" }}
      >
        <NavItem href={"/"} icon={FiHome} label={"Home"} />

        {isUserLoggedIn ? (
          <NavItem href={"/profile"} icon={BiUser} label={"My Profile"} />
        ) : (
          <NavItem
            isButton={true}
            onClick={openSidebar}
            icon={BiUser}
            label={"My Profile"}
          />
        )}

        <NavItem
          href={"/party-orders"}
          icon={LuPartyPopper}
          label={"Party Order"}
        />
        <NavItem href={"/checkout"} icon={FiShoppingCart} label={"Cart"} />
      </nav>
    </div>
  );
};

export default NavbarMobileFixed;
