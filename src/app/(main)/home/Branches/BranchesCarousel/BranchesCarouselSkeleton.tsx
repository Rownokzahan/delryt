import BranchCardSkeleton from "@/cards/BranchCard/BranchCardSkeleton";
import CarouselDotsSkeleton from "@/components/Carousel/CarouselDotsSkeleton";

const BranchesCarouselSkeleton = () => {
  return (
    <div className="mt-4">
      <div className="hidden md:flex items-center gap-3">
        {[...Array(3)].map((_, index) => (
          <BranchCardSkeleton key={index} />
        ))}
      </div>

      <div className="md:hidden">
        <BranchCardSkeleton />
      </div>

      {/* Placeholder for carousel dots */}
      <CarouselDotsSkeleton />
    </div>
  );
};

export default BranchesCarouselSkeleton;