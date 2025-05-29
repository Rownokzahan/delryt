import Logo from "@/components/ui/Logo";
import useBranch from "@/hooks/useBranch";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const LogoWithBranchLink = () => {
  const { currentBranch } = useBranch();

  return (
    <div className="flex items-center gap-3">
      <Logo />

      {/* Branch Link */}
      {currentBranch && (
        <Link href={"/branch-list"} className="flex items-center gap-1">
          <div className="grid font-normal">
            <p className="text-xs text-uiBlack-light">Branch</p>
            <p className="text-primary text-sm font-medium">
              {currentBranch.name}
            </p>
          </div>
          <RiArrowDownSLine className="text-uiBlack-light" />
        </Link>
      )}
    </div>
  );
};

export default LogoWithBranchLink;
