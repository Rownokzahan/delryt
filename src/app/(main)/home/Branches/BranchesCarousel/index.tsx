"use client";

import { useGetBranchListQuery } from "@/store/features/branch/branchApi";
import { Branch } from "@/types";
import useBranch from "@/hooks/useBranch";
import Carousel from "@/components/Carousel";
import BranchCard from "@/cards/BranchCard";
import BranchesCarouselSkeleton from "./BranchesCarouselSkeleton";

const BranchesCarousel = () => {
  const { data: branches = [], isLoading, error } = useGetBranchListQuery();
  const { currentBranch, updateCurrentBranch } = useBranch();

  const handleBranchSelect = (branch: Branch) => {
    updateCurrentBranch(branch);
  };

  if (isLoading) {
    return <BranchesCarouselSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch branches:", error);
    return null;
  }

  return (
    <Carousel containerClasses="-mx-3">
      {branches?.map((branch) => (
        <BranchCard
          key={branch?.id}
          branch={branch}
          selectedBranch={currentBranch}
          onBranchSelect={handleBranchSelect}
          className="mx-3"
        />
      ))}
    </Carousel>
  );
};

export default BranchesCarousel;
