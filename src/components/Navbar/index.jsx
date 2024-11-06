"use client";

import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Sidebar from "./Sidebar";
import SearchModal from "../modals/SearchModal";

const Navbar = () => {
  // Toggle states for Sidebar and Search Modal
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(true);

  // Handlers to toggle Sidebar and Search Modal
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  // Placeholder for Sign-In Modal functionality
  const openSignInModal = () => console.log("Sign-In Modal Triggered");

  return (
    <>
      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <NavbarMobile
          openSignInModal={openSignInModal}
          openSidebar={openSidebar}
          openSearchModal={openSearchModal}
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
    </>
  );
};

export default Navbar;
