import clsx from "clsx";

interface ProductCardSkeletonProps {
  noMobileLayoutShift?: boolean;
}

const ProductCardSkeleton = ({
  noMobileLayoutShift = false,
}: ProductCardSkeletonProps) => {
  return (
    <div
      className={clsx(
        "border rounded-md shadow-md hover:scale-[1.02] duration-300 animate-pulse",
        noMobileLayoutShift ? "block" : "sm:m-3 flex md:block"
      )}
    >
      <div
        className={clsx(
          "bg-gray-200 rounded-md",
          noMobileLayoutShift
            ? "aspect-3/2"
            : "shrink-0 w-[40%] md:w-full md:aspect-3/2"
        )}
      />

      <div className="p-3 md:p-0 flex-1 min-w-0">
        <div className="md:p-3">
          <div className="h-7 md:h-6 bg-gray-200" />
          <div className="my-2 md:my-4 h-5 w-11/12 bg-gray-200 " />
          <div className="h-6 w-12 bg-gray-200" />
        </div>

        <div className="mt-3 md:mt-0 pt-3 md:p-3 border-t flex justify-between items-center gap-2">
          <div className="h-7 w-32 bg-gray-200" />
          <div className="h-7 w-16 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
