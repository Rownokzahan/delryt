"use client";

import { useLogoutMutation } from "@/store/features/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbChevronRight } from "react-icons/tb";

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

const ProfileMenuList = () => {
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
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
  );
};

export default ProfileMenuList;
