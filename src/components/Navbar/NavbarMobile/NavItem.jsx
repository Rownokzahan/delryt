import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, icon: Icon, label, isButton = false, onClick }) => {
  const pathname = usePathname();

  if (isButton) {
    return (
      <button
        onClick={onClick}
        className="px-2 flex flex-col items-center gap-[2px]"
      >
        <Icon className="text-lg" />
        <span className="text-xs font-semibold">{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className="px-2 flex flex-col items-center gap-[2px]">
      <Icon className={clsx("text-lg", pathname === href && "text-primary")} />
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
