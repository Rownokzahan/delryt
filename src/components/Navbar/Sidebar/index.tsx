import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import clsx from "clsx";
import { PiPhoneCall } from "react-icons/pi";
import { FC } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

type LinkItem = {
  label: string;
  href: string;
};

const links: LinkItem[] = [
  { label: "Profile", href: "/" },
  { label: "My Order", href: "/" },
  { label: "Order Details", href: "/" },
  { label: "Favourite", href: "/" },
  { label: "Notification", href: "/" },
  { label: "Wallet", href: "/" },
  { label: "Loyalty Point", href: "/" },
  { label: "Coupon", href: "/" },
  { label: "Refer & Earn", href: "/" },
  { label: "Address", href: "/" },
  { label: "Message", href: "/" },
  { label: "About Us", href: "/" },
  { label: "Help & Support", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "Terms & Conditions", href: "/" },
  { label: "Return Policy", href: "/" },
  { label: "Refund Policy", href: "/" },
  { label: "Cancellation Policy", href: "/" },
];

type SidebarProps = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  openSignInModal: () => void;
};

const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  closeSidebar,
  openSignInModal,
}) => {
  return (
    <div
      className={clsx(
        "w-full sm:w-80 h-screen border fixed z-40 right-0 top-0 bg-white flex flex-col",
        isSidebarOpen ? "translate-x-0" : "translate-x-full",
        "transition-transform duration-300"
      )}
    >
      {/* Close Button */}
      <div className="p-2 flex justify-end">
        <button onClick={closeSidebar} className="text-2xl text-ui-gray">
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
        {true === true ? (
          <button className="px-3 py-2 border border-primary rounded-md flex items-center gap-2 text-primary">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        ) : (
          <button
            onClick={openSignInModal}
            className="px-3 py-2 border border-primary rounded-md flex items-center gap-2 text-primary"
          >
            <FaSignInAlt />
            <span>Sign in</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
