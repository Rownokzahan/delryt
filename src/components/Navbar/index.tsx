"use client";

import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import SearchModal from "./SearchModal";
import SelectDeliverySlot from "./SelectDeliverySlot";
import { RiSearchLine } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Navbar = () => {
  // Toggle states for Sidebar and Search Modal
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Handlers to toggle Sidebar and Search Modal
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  // Placeholder for Sign-In Modal functionality
  const openSignInModal = () => console.log("Sign-In Modal Triggered");

  return (
    <header>
      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <NavbarMobile
          openSignInModal={openSignInModal}
          openSidebar={openSidebar}
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:block">
        <NavbarDesktop
          openSignInModal={openSignInModal}
          openSidebar={openSidebar}
          openSearchModal={openSearchModal}
        />
      </div>

      <SelectDeliverySlot />

      {/* Mobile Search Bar */}
      <button onClick={openSearchModal} className="w-full p-2 pt-0 sm:hidden">
        <div className="w-full py-1 px-2 ps-3 border rounded-lg shadow flex items-center gap-1">
          <RiSearchLine className="text-xl text-primary" />
          <input
            type="text"
            placeholder="Search for restaurants, cuisines and more..."
            className="w-full p-2 outline-none text-sm font-bold placeholder:text-ui-gray-light placeholder:font-normal"
          />
        </div>
      </button>

      {/* Search Modal */}
      <SearchModal
        isModalOpen={isSearchModalOpen}
        closeModal={closeSearchModal}
      />

      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        openSignInModal={openSignInModal}
      />
    </header>
  );
};

export default Navbar;
