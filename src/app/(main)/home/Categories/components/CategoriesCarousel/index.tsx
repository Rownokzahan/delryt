"use client";

import { useGetCategoriesQuery } from "@/store/features/category/categoryApi";
import CategoriesCarouselDesktop from "./CategoriesCarouselDesktop";
import CategoriesCarouselMobile from "./CategoriesCarouselMobile";
import CategoriesCarouselSkeleton from "./CategoriesCarouselSkeleton";

const CategoriesCarousel = () => {
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <CategoriesCarouselSkeleton />
    );
  }

  if (error) {
    console.error("Failed to fetch categories:", error);
    return null;
  }

  return (
    <>
      <CategoriesCarouselDesktop categories={categories} />
      <CategoriesCarouselMobile categories={categories} />
    </>
  );
};

export default CategoriesCarousel;
