"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavItemProps {
  href?: string;
  label: string;
  icon: IconType;
  count?: string | number;
  isButton?: boolean;
  onClick?: () => void;
}

const NavItem = ({
  href,
  icon: Icon,
  label,
  count,
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

        {!!count && (
          <div
            className={clsx(
              "size-[13px] bg-primary rounded-full shadow-sm",
              "flex place-content-center",
              "absolute -top-1 -right-2"
            )}
          >
            <span className="text-uiWhite text-[10px]">{count}</span>
          </div>
        )}
      </div>

      <p
        className={clsx(
          "text-xs font-semibold",
          pathname === href && "text-black"
        )}
      >
        {label}
      </p>
    </Link>
  );
};

export default NavItem;
