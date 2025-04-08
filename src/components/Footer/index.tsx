"use client";

import { PiPhoneCall } from "react-icons/pi";
import Logo from "../ui/Logo";
import SocialIcons from "./SocialIcons";
import FooterLinks from "./FooterLinks";
import CopyrightSection from "./CopyrightSection";

const Footer = () => {
  return (
    <footer
      className="bg-center bg-cover bg-black/90 bg-blend-overlay text-uiWhite"
      style={{ backgroundImage: `url(${"/images/footer-bg.png"})` }}
    >
      <div className="ui-container py-10 text-sm">
        {/* Top section with logo and social icons */}
        <div className="mb-10 flex justify-between items-center">
          <Logo />
          <div className="grid gap-1">
            <p className="text-right">Follow us on</p>
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

      {/* Copyright section */}
      <CopyrightSection />
    </footer>
  );
};

export default Footer;
