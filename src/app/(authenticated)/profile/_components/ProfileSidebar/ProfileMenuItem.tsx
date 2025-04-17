"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";

interface ProfileMenuItemProps {
  item: {
    href: string;
    label: string;
    Icon: IconType;
  };
}

const ProfileMenuItem = ({ item }: ProfileMenuItemProps) => {
  const { href, label, Icon } = item;

  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "w-full p-4 flex items-center justify-between",
        pathname === href && "bg-primary text-uiWhite"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-gray-100 grid place-items-center">
          <Icon className="text-lg text-uiBlack" />
        </div>
        <p>{label}</p>
      </div>

      <IoChevronForwardOutline />
    </Link>
  );
};

export default ProfileMenuItem;
