"use client";

import { PiPhoneCall } from "react-icons/pi";
import Logo from "../Logo";
import SocialIcons from "./SocialIcons";
import FooterLinks from "./FooterLinks";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";
import { useState } from "react";
import FooterBottomSection from "./FooterBottomSection";

const Footer = () => {
  // State to control the visibility of the footer on mobile devices
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  // Toggle function to expand or collapse the footer
  const toggleFooter = () => {
    setIsFooterOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main footer section */}
      <footer
        className={clsx(
          "bg-primary text-white text-sm",
          isFooterOpen ? "max-h-[1000vh]" : "max-h-0",
          "transition-all duration-500",
          "sm:text-base md:max-h-max overflow-hidden"
        )}
      >
        <div className="ui-container py-10">
          {/* Top section with logo and social icons */}
          <div className="mb-10 flex justify-between items-center">
            <Logo color="white" size="large" />
            <div className="grid gap-1">
              <p className="text-right">Find us candid on</p>
              <SocialIcons />
            </div>
          </div>

          {/* Footer links section */}
          <FooterLinks />

          {/* Contact information section */}
          <div className="mt-10 flex items-center sm:justify-center gap-2">
            <PiPhoneCall className="text-2xl" />
            <div className="sm:flex items-center gap-2">
              <p className="text-xs sm:text-base">We are here to help you.</p>
              <p>
                <span className="me-1">Call us at</span>
                <span className="font-semibold">+8801700000011</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section of the footer */}
        <FooterBottomSection />
      </footer>

      {/* Mobile version footer toggle button */}
      <div className="mb-[60px] ui-container py-4 md:hidden">
        <button
          onClick={toggleFooter}
          className="w-full py-3 flex justify-center items-center gap-2 border-2 border-primary text-primary"
        >
          <span className="font-semibold">
            Show {isFooterOpen ? "Less" : "More"}
          </span>
          <FaChevronDown
            className={clsx(
              "text-sm",
              isFooterOpen ? "rotate-180" : "rotate-0",
              "transition-transform duration-300"
            )}
          />
        </button>
      </div>
    </>
  );
};

export default Footer;
