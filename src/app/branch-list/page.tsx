"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import BranchList from "./BranchList";
import { Branch } from "@/types";
import useBranch from "@/hooks/useBranch";
import { redirect } from "next/navigation";

const Page = () => {
  const { currentBranch, updateCurrentBranch } = useBranch();
  const [selectedBranch, setSelectedBranch] = useState(currentBranch);

  useEffect(() => {
    // Update the selected branch when the component mounts
    setSelectedBranch(currentBranch);
  }, [currentBranch]);

  // Update the selected branch ID in local state
  const handleBranchSelect = (branch: Branch) => {
    setSelectedBranch(branch);
  };

  const handleUpdateCurrentBranch = () => {
    if (selectedBranch) {
      updateCurrentBranch(selectedBranch);
      redirect("/");
    }
  };

  return (
    <div className="min-h-screen bg-primary/5 py-12">
      <div className="ui-container">
        <h3 className="mb-8 capitalize text-2xl font-medium">
          Choose your nearest branch
        </h3>

        <BranchList
          selectedBranch={selectedBranch}
          onBranchSelect={handleBranchSelect}
        />

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleUpdateCurrentBranch}
            disabled={selectedBranch === null}
            className="w-64 text-lg tracking-wider font-normal! disabled:bg-primary/30"
          >
            {selectedBranch?.id === null ? "Select Branch" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
