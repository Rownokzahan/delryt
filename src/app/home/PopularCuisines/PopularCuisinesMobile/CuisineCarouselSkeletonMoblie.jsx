import ProgressBar from "@/components/ProgressBar";
import CuisineCardSkeleton from "../CuisineCardSkeleton";

const CuisineCarouselSkeletonMoblie = () => {
  return (
    <>
      <div className="grid grid-cols-2 animate-pulse">
        {[...Array(4)].map((_, index) => (
          <CuisineCardSkeleton key={index} />
        ))}
      </div>

      {/* Progress Bar */}
      <ProgressBar
        variant="skeleton"
        progress={33}
        extraClasses={"mb-0"}
      />
    </>
  );
};

export default CuisineCarouselSkeletonMoblie;
