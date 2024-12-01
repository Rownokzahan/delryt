import clsx from "clsx";
import CuisineCardSkeleton from "../CuisineCardSkeleton";

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

      <div className="flex gap-2 justify-center mt-4 animate-pulse">
        <div className="w-5 h-[6px] bg-gray-200 rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 rounded-3xl" />
      </div>
    </>
  );
};

export default CuisineCarouselSkeleton;
