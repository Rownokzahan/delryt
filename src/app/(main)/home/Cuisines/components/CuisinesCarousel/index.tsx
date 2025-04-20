"use client";

import CuisineCarouselDesktop from "./CuisineCarouselDesktop";
import CuisineCarouselMobile from "./CuisineCarouselMobile";
import CuisineCarouselSkeleton from "./CuisineCarouselSkeleton";
import { useGetCuisinesQuery } from "@/store/features/cuisine/cuisineApi";

const CuisineCarousel = () => {
  const { data: cuisines = [], isLoading, error } = useGetCuisinesQuery();

  if (isLoading) {
    return <CuisineCarouselSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch cuisines:", error);
    return null;
  }

  return (
    <>
      <CuisineCarouselDesktop cuisines={cuisines} />
      <CuisineCarouselMobile cuisines={cuisines} />
    </>
  );
};

export default CuisineCarousel;
