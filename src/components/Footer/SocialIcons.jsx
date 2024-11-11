import { PiYoutubeLogoFill, PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";

const socialLinks = [
  { href: "/", Icon: PiYoutubeLogoFill },
  { href: "/", Icon: PiFacebookLogoBold },
  { href: "/", Icon: TiSocialInstagram },
  { href: "/", Icon: TiSocialTwitter },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 text-2xl sm:text-4xl">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <link.Icon/>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
