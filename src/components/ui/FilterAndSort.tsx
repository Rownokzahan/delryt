"use client";

import clsx from "clsx";
import { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import useModalById from "@/hooks/useModalById";

const tabs = ["All", "Veg", "Non Veg"] as const;
type Tab = (typeof tabs)[number];

interface FilterAndSortProps {
  className?: string;
}

const FilterAndSort = ({ className = "" }: FilterAndSortProps) => {
  const [selectedTab, setSelectedTab] = useState<Tab>("All");
  const { openModal } = useModalById("sortModal");

  return (
    <div
      className={clsx(
        "flex justify-between gap-6 text-sm bg-uiWhite",
        "sm:justify-end sm:gap-12 sm:text-base",
        className
      )}
    >
      {/* Tab selection */}
      <div className="p-1 rounded-md bg-gray-200 flex items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={clsx(
              "px-3 py-1 rounded-md",
              selectedTab === tab && "bg-primary text-uiWhite"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {/* Sort button and modal trigger */}
        <p>Sort</p>
        <button onClick={openModal} className="bg-gray-200 rounded-md p-2">
          <LuSettings2 className="text-primary text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FilterAndSort;
