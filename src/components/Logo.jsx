import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Image from "next/image";

const Logo = ({ size = "large" }) => {
  const sizes = {
    "large": "w-24",
    "small": "w-20",
  };

  return (
    <Link href={"/"}>
      <Image
        width={99}
        height={50}
        src={logo.src}
        alt="Logo"
        className={`${sizes[size]}`}
      />
    </Link>
  );
};

export default Logo;
