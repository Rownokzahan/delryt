"use client";

import useLovedCollections from "@/hooks/useLovedCollections";
import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";
import CarouselSkeleton from "./CarouselSkeleton";

const CollectionsCarousel = () => {
  const { data: collections = [], loading } = useLovedCollections();

  if (loading) {
    return <CarouselSkeleton />;
  }

  return (
    <>
      <div className="hidden sm:block">
        <CarouselDesktop collections={collections} />
      </div>

      <div className="sm:hidden">
        <CarouselMobile collections={collections} />
      </div>
    </>
  );
};

export default CollectionsCarousel;
