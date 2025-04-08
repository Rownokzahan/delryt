"use client";

import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import clsx from "clsx";
import { PiPhoneCall } from "react-icons/pi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useModalById from "@/hooks/useModalById";
import useSidebarById from "@/hooks/useSidebarById";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface LinkItem {
  label: string;
  href: string;
}

const links: LinkItem[] = [
  { label: "My Profile", href: "/profile" },
  { label: "About Delryt", href: "/about-us" },
  { label: "Party Orders", href: "/party-orders" },
  { label: "FAQs", href: "/faq" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/terms" },
];

const MyProfileSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarById("myProfileSidebar");
  const { openModal: openAuthModal } = useModalById("authModal");
  const pathname = usePathname();

  const isUserLoggedIn = true;

  // Close sidebar if route changes
  useEffect(() => {
    if (isSidebarOpen) {
      closeSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    // Disable body scroll if disableScroll is true and sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Ensure cleanup to avoid side effects
    };
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && (
        <div className="fixed z-40 inset-0 bg-black/60 backdrop-blur-xs"></div>
      )}

      <div
        className={clsx(
          "w-full sm:w-80 h-[100dvh] border fixed z-40 right-0 top-0 bg-white flex flex-col",
          isSidebarOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300"
        )}
      >
        {/* Close Button */}
        <div className="p-2 flex justify-end">
          <button onClick={closeSidebar} className="text-2xl text-uiBlack/70">
            <HiXMark />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 grid gap-3 overflow-y-auto">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-1 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 flex items-center gap-2">
          <PiPhoneCall className="text-2xl text-primary" />
          <div>
            <p>We are here to help you</p>
            <p className="text-sm text-black">
              <span className="me-1">Call us at</span>
              <span className="font-semibold">+8801700000011</span>
            </p>
          </div>
        </div>

        <div className="px-5 py-4 border-t">
          {isUserLoggedIn ? (
            <button className="px-3 py-2 border border-primary rounded-md flex items-center gap-2 text-primary">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              className="px-3 py-2 border border-primary rounded-md flex items-center gap-2 text-primary"
            >
              <FaSignInAlt />
              <span>Sign in</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfileSidebar;
