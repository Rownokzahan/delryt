import { Branch } from "@/types";
import { useGetBranchListQuery } from "@/store/branch/branchApi";
import BranchCard from "@/cards/BranchCard";
import BranchListSkeleton from "./BranchListSkeleton";

interface BranchesProps {
  selectedBranch: Branch | null;
  onBranchSelect: (branch: Branch) => void;
}

const BranchList = ({ selectedBranch, onBranchSelect }: BranchesProps) => {
  const { data: branches = [], isLoading, error } = useGetBranchListQuery();

  if (isLoading) {
    return <BranchListSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch branches:", error);
    return;
  }

  if (branches.length === 0) {
    return <p>No branch available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {branches.map((branch: Branch) => (
        <BranchCard
          key={branch.id}
          branch={branch}
          selectedBranch={selectedBranch}
          onBranchSelect={onBranchSelect}
        />
      ))}
    </div>
  );
};

export default BranchList;
