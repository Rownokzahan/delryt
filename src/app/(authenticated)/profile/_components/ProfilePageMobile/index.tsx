"use client";

import NavbarMobileFixed from "@/components/NavbarMobileFixed";
import useModalById from "@/hooks/useModalById";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { TbChevronRight } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import useUser from "@/hooks/useUser";
import { useLogoutMutation } from "@/store/auth/authApi";
import { useRouter } from "next/navigation";

const menuItems = [
  { label: "My Orders", href: "/profile/my-orders" },
  { label: "Manage Addresses", href: "/profile/manage-address" },
  {
    label: "Sure Points",
    href: "/profile/sure-points",
  },
  { label: "Wallet Transactions", href: "/profile/wallet", isNew: true },
  { label: "FAQs", href: "/faq" },
  { label: "About Us", href: "/profile/about" },
  { label: "Privacy Policy", href: "/profile/terms" },
  { label: "Terms & Conditions", href: "/profile/terms" },
];

const ProfilePageMobile = () => {
  const { openModal: openEditProfileModal } = useModalById("editProfileModal");
  const { user } = useUser();
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
    <div className="sm:hidden min-h-screen ui-container py-3 bg-gray-200">
      <div className="rounded-md bg-primary">
        <div className="px-2 py-4 rounded-md flex items-center gap-3 text-uiWhite">
          <div className="bg-uiWhite rounded-full">
            <FaCircleUser className="text-6xl text-gray-200" />
          </div>
          <div>
            <h3 className="text-lg font-medium truncate">
              Hi, {user?.f_name} {user?.l_name}
            </h3>
            <p className="mb-2 text-xs">{user?.phone}</p>

            <button
              onClick={openEditProfileModal}
              className="text-uiWhite text-xs flex items-center gap-1"
            >
              <FaEdit />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-3 text-uiBlack-light">
        <div className="px-3 rounded-md bg-uiWhite divide-y">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-3 bg-uiWhite flex justify-between gap-2"
            >
              {item.isNew ? (
                <p className="flex items-center gap-1">
                  <span>{item.label}</span>
                  <span className="px-1 pt-px rounded-sm uppercase bg-primary text-[10px] text-uiWhite relative">
                    New
                    <span className="absolute -top-1 left-[calc(100%+2px)] text-primary">
                      *
                    </span>
                  </span>
                </p>
              ) : (
                <p>{item.label}</p>
              )}

              <TbChevronRight className="text-gray-300 text-xl" />
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-md bg-uiWhite flex justify-between gap-2"
          >
            <p>Logout</p>
            <TbChevronRight className="text-gray-300 text-xl" />
          </button>
        </div>
      </div>

      <NavbarMobileFixed />
    </div>
  );
};

export default ProfilePageMobile;
