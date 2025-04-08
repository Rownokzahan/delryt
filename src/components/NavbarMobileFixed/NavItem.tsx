"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavItemProps {
  href?: string;
  label: string;
  icon: IconType;
  badge?: string | number;
  isButton?: boolean;
  onClick?: () => void;
}

const NavItem = ({
  href,
  icon: Icon,
  label,
  badge,
  isButton = false,
  onClick,
}: NavItemProps) => {
  // Get the current pathname
  const pathname = usePathname();

  // If the item is a button or has no href, render a button
  if (isButton || !href) {
    return (
      <button
        onClick={onClick}
        className="px-2 flex flex-col items-center gap-[2px]"
        aria-label={label}
      >
        <Icon className="text-lg" />
        <span className="text-xs font-semibold">{label}</span>
      </button>
    );
  }

  // Render a Link if href is provided
  return (
    <Link
      href={href}
      className="px-2 flex flex-col items-center gap-[2px]"
      aria-label={label}
    >
      <div className="relative">
        <Icon
          className={clsx("text-lg", pathname === href && "text-primary")}
        />
        {badge !== undefined && badge !== null && (
          <div
            className={clsx(
              "size-4 bg-primary rounded-full shadow-sm",
              "flex justify-center items-center",
              "absolute -top-2 -right-3"
            )}
          >
            <span className="text-uiWhite text-xs">{badge}</span>
          </div>
        )}
      </div>

      <span
        className={clsx(
          "text-xs font-semibold",
          pathname === href && "text-black"
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
