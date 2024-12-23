import Logo from "@/components/Logo";
import Link from "next/link";
import { FC } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

type LogoWithBranchLinkProps = {
  logoSize?: "small" | "default" | "large";
};

const LogoWithBranchLink: FC<LogoWithBranchLinkProps> = ({
  logoSize = "default",
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo */}
      <Logo size={logoSize} />

      {/* Branch Link */}
      <Link href={"/"} className="flex items-center gap-1">
        <div className="grid font-normal">
          <p className="text-xs text-uiBlack-light">Branch</p>
          <p className="text-primary text-sm font-medium">Branch 2</p>
        </div>
        <RiArrowDownSLine className="text-uiBlack-light" />
      </Link>
    </div>
  );
};

export default LogoWithBranchLink;
