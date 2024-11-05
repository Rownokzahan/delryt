"use client";

import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Sidebar from "./Sidebar";
import SearchModal from "../modals/SearchModal";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const openSignInModal = () => {
    console.log("object");
  };

  return (
    <>
      <div className="sm:hidden">
        <NavbarMobile
          openSignInModal={openSignInModal}
          openSidebar={openSidebar}
          openSearchModal={openSearchModal}
        />
      </div>

      <div className="hidden sm:block">
        <NavbarDesktop
          openSignInModal={openSignInModal}
          openSidebar={openSidebar}
          openSearchModal={openSearchModal}
        />
      </div>

      <SearchModal
        isModalOpen={isSearchModalOpen}
        closeModal={closeSearchModal}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        openSignInModal={openSignInModal}
      />
    </>
  );
};

export default Navbar;
