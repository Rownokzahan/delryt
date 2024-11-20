import Link from "next/link";
import logo from "../../public/images/logo.svg";
import logoWhite from "../../public/images/logo-white.svg";
import Image from "next/image";
import clsx from "clsx";

const Logo = ({ size = "medium", color = "primary", className = "" }) => {
  const sizes = {
    large: "w-28",
    medium: "w-24",
    small: "w-20",
  };

  const imageSrc = {
    primary: logo.src,
    white: logoWhite.src,
  };

  return (
    <Link href={"/"}>
      <Image
        width={99}
        height={50}
        src={imageSrc[color]}
        alt="Logo"
        className={clsx(sizes[size], className)}
      />
    </Link>
  );
};

export default Logo;
