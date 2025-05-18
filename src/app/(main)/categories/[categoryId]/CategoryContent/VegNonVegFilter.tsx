import clsx from "clsx";
import { useState } from "react";

const tabs = ["All", "Veg", "Non Veg"] as const;
type Tab = (typeof tabs)[number];

const VegNonVegFilter = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("All");

  return (
    <div className="p-1 size-max rounded-md bg-uiWhite flex items-center">
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
  );
};

export default VegNonVegFilter;
