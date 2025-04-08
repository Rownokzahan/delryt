import clsx from "clsx";

interface CuisineCardSkeletonProps {
  containerClasses?: string;
}

const CuisineCardSkeleton = ({
  containerClasses = "",
}: CuisineCardSkeletonProps) => {
  return (
    <div className={clsx("w-full p-2 sm:py-0 sm:px-3", containerClasses)}>
      <div className="relative aspect-square bg-gray-200">
        <div className="w-full absolute top-7 left-px">
          <span className="absolute top-0 left-0 h-9 w-[6px] bg-secondary/20" />
        </div>
        <span className="border-[25px] border-primary border-e-0 border-s-transparent border-b-transparent absolute -top-px -right-px" />
      </div>
    </div>
  );
};

export default CuisineCardSkeleton;
