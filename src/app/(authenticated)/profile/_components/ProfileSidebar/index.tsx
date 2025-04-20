"use client";

import ProfileHeader from "./ProfileHeader";
import ProfileMenuItem from "./ProfileMenuItem";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import {
  MdCheckCircleOutline,
  MdOutlineInfo,
  MdOutlineOfflineBolt,
} from "react-icons/md";
import LogoutButton from "./LogoutButton";

const menuItems = [
  {
    id: 1,
    Icon: GiShoppingBag,
    label: "My Orders",
    href: "/profile/my-orders",
  },
  {
    id: 2,
    Icon: FaMapMarkerAlt,
    label: "Manage Address",
    href: "/profile/manage-address",
  },
  {
    id: 3,
    Icon: IoWallet,
    label: "Wallet Transactions",
    href: "/profile/wallet",
  },
  {
    id: 4,
    Icon: MdOutlineOfflineBolt,
    label: "Sure Points",
    href: "/profile/sure-points",
  },
  { id: 5, Icon: MdOutlineInfo, label: "About Delryt", href: "/profile/about" },
  {
    id: 6,
    Icon: MdCheckCircleOutline,
    label: "Terms And Conditions",
    href: "/profile/terms",
  },
];

const ProfileSidebar = () => {
  return (
    <aside className="w-[35%] max-w-96 border-e">
      <ProfileHeader />

      <div className="divide-y">
        {menuItems.map((item) => (
          <ProfileMenuItem key={item.id} item={item} />
        ))}

        <LogoutButton />
      </div>
    </aside>
  );
};

export default ProfileSidebar;
