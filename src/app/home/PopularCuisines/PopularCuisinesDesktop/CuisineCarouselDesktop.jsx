"use client";

import usePopularCuisines from "@/hooks/usePopularCuisines";
import CuisineCarouselSkeleton from "./CuisineCarouselSkeletonDesktop";
import Carousel from "@/components/carousels/Carousel";
import CuisineCard from "../CuisineCard";

const CuisineCarousel = () => {
  const { data: cuisines, loading } = usePopularCuisines();
  if (loading) {
    return <CuisineCarouselSkeleton />;
  }

  return (
    <Carousel slidesToShow={4} containerClasses="popular-cuisines">
      {cuisines?.map((cuisine) => (
        <CuisineCard key={cuisine?.id} cuisine={cuisine} />
      ))}
    </Carousel>
  );
};

export default CuisineCarousel;
