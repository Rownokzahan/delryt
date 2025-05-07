"use client";

import { useGetBranchListQuery } from "@/store/features/branch/branchApi";
import { Branch } from "@/types";
import useBranch from "@/hooks/useBranch";
import Carousel from "@/components/Carousel";
import BranchCard from "@/cards/BranchCard";
import BranchesCarouselSkeleton from "./BranchesCarouselSkeleton";
import toast from "react-hot-toast";

const BranchesCarousel = () => {
  const { data: branches = [], isLoading, error } = useGetBranchListQuery();
  const { currentBranch, updateCurrentBranch } = useBranch();

  const handleBranchSelect = (branch: Branch) => {
    if (currentBranch?.id === branch.id) {
      toast.error("You're already on this branch. Try selecting another one.");
      return;
    }

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
