import CarouselDotsSkeleton from "@/components/carousels/CarouselDotsSkeleton";
import ComboCardSkeleton from "../ComboCard/ComboCardSkeleton";
import ProgressBar from "@/components/ProgressBar";

const CarouselSkeleton = () => {
  return (
    <>
      {/* Mobile view skeleton */}
      <div className="sm:hidden">
        {/* Card placeholder */}
        <ComboCardSkeleton />

        {/* Placeholder progress bar */}
        <ProgressBar
          variant="skeleton"
          progress={30}
          extraClasses={"mb-8 sm:hidden"}
        />
      </div>

      {/* Desktop view skeleton */}
      <div className="hidden sm:block">
        {/* Grid of skeleton cards */}
        <div className="grid grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <ComboCardSkeleton key={index} />
          ))}
        </div>

        {/* Placeholder for carousel dots */}
        <CarouselDotsSkeleton />
      </div>
    </>
  );
};

export default CarouselSkeleton;
