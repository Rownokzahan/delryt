import Logo from "@/components/Logo";
import { BiUser } from "react-icons/bi";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { LuPartyPopper } from "react-icons/lu";
import { PiUserCircle } from "react-icons/pi";
import NavItem from "./NavItem";
import { RiSearchLine } from "react-icons/ri";

const NavbarMobile = ({ openSidebar, openSignInModal, openSearchModal }) => {
  return (
    <>
      {/* Top Navbar with Logo and Login Button */}
      <div className="ui-container py-2 border-b border-primary-dark shadow-sm flex justify-between items-center">
        <Logo size="small" />

        <button
          onClick={openSignInModal}
          className="h-max px-2 py-1 border rounded shadow-sm flex items-center gap-1"
        >
          <PiUserCircle className="text-xl text-primary" />
          <span className="font-semibold text-sm">Login</span>
        </button>
      </div>

      {/* Search Bar */}
      <button onClick={openSearchModal} className="w-full p-2">
        <div className="w-full py-1 px-2 ps-3 border rounded-lg shadow flex items-center gap-1">
          <RiSearchLine className="text-xl text-primary" />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines and more..."
            className="w-full p-2 outline-none text-sm font-bold placeholder:text-ui-gray-light placeholder:font-normal"
          />
        </div>
      </button>

      {/* Sticky Bottom Navigation Bar */}
      <div
        className="w-full ui-container py-3 fixed bottom-0 left-0 bg-white flex justify-between items-center text-ui-gray text-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px -4px 4px 0px" }}
      >
        <NavItem href={"/"} icon={FiHome} label={"Home"} />
        <NavItem
          isButton={true}
          onClick={openSidebar}
          icon={BiUser}
          label={"My Profile"}
        />
        <NavItem
          href={"/party-order"}
          icon={LuPartyPopper}
          label={"Party Order"}
        />
        <NavItem href={"/cart"} icon={FiShoppingCart} label={"Cart"} />
      </div>
    </>
  );
};

export default NavbarMobile;
