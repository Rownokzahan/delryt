import CuisineCardSkeleton from "../CuisineCardSkeleton";

const CuisineCarouselSkeletonMoblie = () => {
  return (
    <>
      <div className="grid grid-cols-2 animate-pulse">
        {[...Array(4)].map((_, index) => (
          <CuisineCardSkeleton key={index} />
        ))}
      </div>

      <div className="w-2/3 h-1 mt-4 mx-auto rounded-full bg-gray-300 animate-pulse">
        <div className="w-1/2 h-1 bg-secondary/20 rounded-full" />
      </div>
    </>
  );
};

export default CuisineCarouselSkeletonMoblie;
