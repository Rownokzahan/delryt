"use client";

import CuisineCarouselDesktop from "./CuisineCarouselDesktop";
import CuisineCarouselMobile from "./CuisineCarouselMobile";
import CuisineCarouselSkeleton from "./CuisineCarouselSkeleton";
import { useGetCuisinesQuery } from "@/store/cuisine/cuisineApi";

const CuisineCarousel = () => {
  const { data: cuisines = [], isLoading } = useGetCuisinesQuery()

  if (isLoading) {
    return <CuisineCarouselSkeleton />;
  }

  return (
    <>
      <CuisineCarouselDesktop cuisines={cuisines} />
      <CuisineCarouselMobile cuisines={cuisines} />
    </>
  );
};

export default CuisineCarousel;
