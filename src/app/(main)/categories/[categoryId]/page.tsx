"use client";

import { useParams } from "next/navigation";
import { useGetCategoryByIdQuery } from "@/store/features/category/categoryApi";
import CategoryContent from "./CategoryContent";
import CategoryNotFound from "./CategoryNotFound";
import CategoryContentSkeleton from "./CategoryContentSkeleton";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const {
    data: category,
    isLoading,
    error,
  } = useGetCategoryByIdQuery(categoryId as string);

  if (isLoading) {
    return <CategoryContentSkeleton />;
  }

  if (error) {
    console.error("Error fetching category:", error);
  }

  if (category === undefined) {
    return <CategoryNotFound />;
  }

  return <CategoryContent category={category} />;
};

export default CategoryPage;
