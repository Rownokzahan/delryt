"use client";

import { useEffect, useState } from "react";
import {
  MdOutlineContentCopy,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Modal from "../Modal";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { usePathname } from "next/navigation";

const socials = [
  {
    id: "whatsapp",
    name: "Share on WhatsApp",
    Icon: IoLogoWhatsapp,
  },
  {
    id: "facebook",
    name: "Share on Facebook",
    Icon: FaFacebook,
  },
  { id: "twitter", name: "Share on Twitter", Icon: FaXTwitter },
  {
    id: "gmail",
    name: "Share via Gmail",
    Icon: IoMail,
  },
] as const;

const ShareModal = () => {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href;
      setCurrentUrl(fullUrl);
    }
  }, [pathname]);

  const handleCopyLinkClick = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 3000); // Reset after 3 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };


  const encodedUrl = encodeURIComponent(currentUrl);

  // Build share URLs dynamically
  const getShareLink = (id: (typeof socials)[number]["id"]) => {
    switch (id) {
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${encodedUrl}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?&url=${encodedUrl}`;
      case "gmail":
        return `mailto:?body=${currentUrl}`;
      default:
        return "#";
    }
  };

  return (
    <Modal modalId={"shareModal"} fullHeightOnSmall={false}>
      <h3 className="text-xl sm:text-2xl font-medium pt-9 ps-4 sm:px-8">
        If you love this, share it with those you love
      </h3>
      <div className="px-4 py-8 sm:px-8">
        <div className="space-y-10 mb-10">
          {socials.map(({ id, Icon, name }) => (
            <a
              key={id}
              href={getShareLink(id)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Icon className="text-3xl text-uiBlack" />
                <h4 className="sm:text-xl">{name}</h4>
              </div>

              <MdOutlineKeyboardArrowRight />
            </a>
          ))}
        </div>

        <div className="p-4 bg-gray-200 flex justify-between items-center gap-3">
          <p className="text-sm flex-1 overflow-hidden break-words">
            {currentUrl}
          </p>

          {isCopied ? (
            <p className="font-medium text-sm">Copied!</p>
          ) : (
            <button
              onClick={handleCopyLinkClick}
              className="flex items-center gap-1"
            >
              <MdOutlineContentCopy />
              <span className="font-medium text-sm">Copy</span>
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
