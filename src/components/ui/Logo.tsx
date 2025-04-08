import Link from "next/link";
import logo from "../../../public/images/logo.png";
import logoWhite from "../../../public/images/logo-white.svg";
import Image from "next/image";
import clsx from "clsx";

const sizes = {
  small: "w-9",
  default: "w-12",
  large: "w-16",
} as const;

const imageSources = {
  primary: logo.src,
  white: logoWhite.src,
} as const;

interface LogoProps {
  size?: keyof typeof sizes;
  color?: keyof typeof imageSources;
  className?: string;
}

const Logo = ({
  size = "default",
  color = "primary",
  className = "",
}: LogoProps) => {
  return (
    <Link href={"/"} aria-label="Logo">
      <Image
        width={99}
        height={50}
        src={imageSources[color]}
        alt="Logo"
        className={clsx(sizes[size], className)}
      />
    </Link>
  );
};

export default Logo;
