"use client"

import useRestaurantCombos from "@/hooks/useRestaurantCombos";
import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";
import CarouselSkeleton from "./CarouselSkeleton";

const ComboCarousel = () => {
  const { data: combos = [], loading } = useRestaurantCombos();

  if (loading) {
    return <CarouselSkeleton />;
  }

  return (
    <>
      <div className="hidden sm:block">
        <CarouselDesktop combos={combos} />
      </div>

      <div className="sm:hidden">
        <CarouselMobile combos={combos} />
      </div>
    </>
  );
};

export default ComboCarousel;
