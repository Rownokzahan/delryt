import Link from "next/link";
import Logo from "../Logo";
import { HiXMark } from "react-icons/hi2";
import clsx from "clsx";
import { PiPhoneCall } from "react-icons/pi";

const links = [
  { label: "Help & Support", href: "/" },
  { label: "FAQs", href: "/" },
  { label: "About EatSure", href: "/" },
  { label: "EatSure Elite", href: "/" },
  { label: "Terms & Conditions", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "Party Orders", href: "/" },
];

const Sidebar = ({ isSidebarOpen, closeSidebar, openSignInModal }) => {
  return (
    <div
      className={clsx(
        "w-full sm:w-80 h-screen border fixed right-0 top-0 bg-white flex flex-col",
        isSidebarOpen ? "translate-x-0" : "translate-x-full",
        "transition-transform duration-300"
      )}
    >
      {/* Close Button */}
      <div className="p-3 pb-0 flex justify-end">
        <button onClick={closeSidebar} className="text-3xl text-ui-gray">
          <HiXMark />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="px-6 grid gap-3 overflow-y-auto">
        <button onClick={openSignInModal} className="text-left">
          Login
        </button>

        {links.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="py-1 hover:text-primary"
          >
            {item.label}
          </Link>
        ))}

        {/* Contact Information */}
        <div className="flex items-center gap-2 mt-3">
          <PiPhoneCall className="text-2xl text-primary" />
          <div>
            <p>We are here to help you</p>
            <p className="text-sm text-black">
              <span className="me-1">Call us at</span>
              <span className="font-semibold">+8801700000011</span>
            </p>
          </div>
        </div>
      </nav>

      {/* Logo at Bottom */}
      <div className="mt-auto px-5 py-2">
        <Logo size="small" />
      </div>
    </div>
  );
};

export default Sidebar;
