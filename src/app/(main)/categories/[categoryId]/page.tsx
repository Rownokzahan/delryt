"use client";

import { useParams } from "next/navigation";
import CategoryBanner from "./CategoryBanner";
import { useGetCategoryByIdQuery } from "@/store/features/category/categoryApi";
import { TbReportSearch } from "react-icons/tb";
import { useState } from "react";
import clsx from "clsx";

const tabs = ["All", "Veg", "Non Veg"] as const;
type Tab = (typeof tabs)[number];

const CategoryPage = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("All");
  const { categoryId } = useParams();
  const {
    data: category,
    isLoading,
    error,
  } = useGetCategoryByIdQuery(categoryId as string);
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    console.error("Error fetching category:", error);
  }

  if (category === undefined) {
    return (
      <section className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <TbReportSearch className="text-5xl md:text-6xl" aria-hidden="true" />
          <h2 className="text-2xl font-semibold">Category Not Found</h2>
          <p className="text-base text-uiBlack-light max-w-md">
            This category doesn’t exist or couldn’t be loaded. Please try again
            later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <main>
      <CategoryBanner category={category} />

      <section className="ui-container mt-4 flex">
        <div>
          <div>All</div>
          <div>Category 1</div>
          <div>Category 2</div>
        </div>

        {/* Tab selection */}
        <div className="p-1 size-max ms-auto rounded-md bg-gray-200 flex items-center">
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
      </section>
    </main>
  );
};

export default CategoryPage;
