"use client";

import { useGetBranchListQuery } from "@/store/branch/branchApi";
import BranchesCarouselSkeleton from "./BranchesCarouselSkeleton";
import Carousel from "@/components/Carousel";
import BranchCard from "@/cards/BranchCard";
import { Branch } from "@/types";
import useCurrentBranch from "@/hooks/useCurrentBranch";

const BranchesCarousel = () => {
  const { data: branches = [], isLoading, error } = useGetBranchListQuery();
  const { currentBranch } = useCurrentBranch();

  const handleBranchSelect = (branch: Branch) => {
    console.log("Selected branch:", branch);
  };

  if (isLoading) {
    return <BranchesCarouselSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch branches:", error);
    return null;
  }

  return (
    <Carousel containerClasses="mt-4 -mx-3">
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
