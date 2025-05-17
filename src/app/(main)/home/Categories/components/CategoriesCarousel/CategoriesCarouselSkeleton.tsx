import ProgressBar from "@/components/ui/ProgressBar";
import CarouselDotsSkeleton from "@/components/Carousel/CarouselDotsSkeleton";
import CategoryCardSkeleton from "@/cards/CategoryCard/CategoryCardSkeleton";

const CategoriesCarouselSkeleton = () => {
  return (
    <div>
      {/* Category skeleton cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </div>

      {/* Carousel dots skeleton for desktop screens */}
      <div className="hiiden sm:block">
        <CarouselDotsSkeleton />
      </div>

      {/* Progress bar skeleton for mobile screens */}
      <ProgressBar
        variant="skeleton"
        progress={30}
        extraClasses={"mb-8 sm:hidden"}
      />
    </div>
  );
};

export default CategoriesCarouselSkeleton;
