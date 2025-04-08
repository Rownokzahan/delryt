import CarouselDotsSkeleton from "@/components/Carousel/CarouselDotsSkeleton";
import ProgressBar from "@/components/ui/ProgressBar";
import CuisineCardSkeleton from "../CuisineCard/CuisineCardSkeleton";

const CuisineCarouselSkeleton = () => {
  return (
    <>
      <div className="hidden sm:block">
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
      </div>

      <div className="sm:hidden">
        <div className="grid grid-cols-2 animate-pulse">
          {[...Array(4)].map((_, index) => (
            <CuisineCardSkeleton key={index} />
          ))}
        </div>

        {/* Progress Bar */}
        <ProgressBar variant="skeleton" progress={33} extraClasses={"mb-0"} />
      </div>
    </>
  );
};

export default CuisineCarouselSkeleton;
