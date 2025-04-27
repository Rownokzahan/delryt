"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";

type LinkProps = {
  Icon: IconType;
  label: string;
  href: string;
  onClick?: never;
};

type ButtonProps = {
  Icon: IconType;
  label: string;
  href?: never;
  onClick: () => void;
};

type ProfileMenuItemProps = LinkProps | ButtonProps;

const ProfileMenuItem = ({
  label,
  Icon,
  href,
  onClick,
}: ProfileMenuItemProps) => {
  const pathname = usePathname();

  const containerClass = "w-full p-4 flex items-center justify-between";

  const content = (
    <>
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-gray-100 grid place-items-center">
          <Icon className="text-lg text-uiBlack" />
        </div>
        <p>{label}</p>
      </div>

      <IoChevronForwardOutline />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          containerClass,
          pathname === href && "bg-primary text-uiWhite"
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={containerClass}>
      {content}
    </button>
  );
};

export default ProfileMenuItem;
