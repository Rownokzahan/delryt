import Logo from "@/components/ui/Logo";
import { RootState } from "@/store/store";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

interface LogoWithBranchLinkProps {
  logoSize?: "small" | "default" | "large";
}

const LogoWithBranchLink = ({
  logoSize = "default",
}: LogoWithBranchLinkProps) => {
  const branch = useSelector((state: RootState) => state.branch.currentBranch);

  return (
    <div className="flex items-center gap-3">
      {/* Logo */}
      <Logo size={logoSize} />

      {/* Branch Link */}
      {branch && (
        <Link href={"/branch-list"} className="flex items-center gap-1">
          <div className="grid font-normal">
            <p className="text-xs text-uiBlack-light">Branch</p>
            <p className="text-primary text-sm font-medium">{branch.name}</p>
          </div>
          <RiArrowDownSLine className="text-uiBlack-light" />
        </Link>
      )}
    </div>
  );
};

export default LogoWithBranchLink;
