import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href={"/"} aria-label="Logo">
      <Image
        width={99}
        height={50}
        src={"/images/logo.png"}
        alt="Logo"
        className={clsx("w-10 sm:w-12", className)}
      />
    </Link>
  );
};

export default Logo;
