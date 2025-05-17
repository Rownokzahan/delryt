"use client";

import { useGetCategoriesQuery } from "@/store/features/category/categoryApi";
import CategoryListSkeleton from "./CategoryListSkeleton";
import CategoryCard from "@/cards/CategoryCard";

const CategoryList = () => {
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
    return <CategoryListSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch categories:", error);
  }

  if (categories.length === 0) {
    return (
      <div className="text-uiBlack-light">
        <p>No categories available.</p>
      </div>
    );
  }

  return (
    <div className="-mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
