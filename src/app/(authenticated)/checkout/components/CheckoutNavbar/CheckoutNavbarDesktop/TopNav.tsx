"use client";

import Logo from "@/components/ui/Logo";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";

const TopNav = () => {
  const { user } = useUser();

  return (
    <nav className="h-nav-desktop border-b border-primary/20 shadow-xs">
      <div className="h-full ui-container flex justify-between items-center">
        <div className="flex items-center justify-items-end gap-6">
          <Logo />

          <h3 className="py-1 ps-6 border-s border-primary/10 font-semibold text-2xl">
            Secure Checkout
          </h3>
        </div>

        <div className="flex items-center justify-items-end gap-6">
          <div className="flex items-center gap-1">
            <PiPhoneCall className="text-xl text-primary" />
            <div className="grid text-sm text-black">
              <span>Call us at</span>
              <span className="font-semibold">+8801700000011</span>
            </div>
          </div>

          <div className="ps-6 border-s border-primary/10">
            <Link
              href={"/profile"}
              className="flex flex-row items-center gap-2"
              aria-label="Sign In"
            >
              <FaCircleUser className="text-4xl text-gray-300" />
              <span className="max-w-48 truncate font-semibold text-primary">
                {user?.f_name} {user?.l_name}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
