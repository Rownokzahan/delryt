import CuisineCardSkeleton from "../CuisineCardSkeleton";
import CarouselDotsSkeleton from "@/components/carousels/CarouselDotsSkeleton";

const CuisineCarouselSkeleton = () => {
  return (
    <>
      <div className="flex items-center animate-pulse">
        {[...Array(4)].map((_, index) => (
          <CuisineCardSkeleton
            key={index}
            containerClasses={index > 1 ? "hidden md:block" : ""}
          />
        ))}
      </div>

      {/* Placeholder for carousel dots */}
      <CarouselDotsSkeleton />
    </>
  );
};

export default CuisineCarouselSkeleton;
