import clsx from "clsx";

const BranchCardSkeleton = () => {
  return (
    <div className="w-full aspect-5/4 relative shadow-sm bg-gray-200 animate-pulse">
      <div className="w-full h-full hover:scale-[1.02] duration-300" />
      <div
        className={clsx(
          "w-[calc(100%-(12px*2))] h-18 absolute bottom-3 left-1/2 -translate-x-1/2",
          "p-3 flex items-center gap-3",
          "bg-gray-300"
        )}
      >
        <div className="size-10 aspect-square shrink-0 polygon-1 bg-gray-100" />

        <div className="flex-1 min-w-0">
          <div className="mb-2 h-4 w-1/2 bg-gray-100" />
          <div className="h-3 w-9/12 bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default BranchCardSkeleton;
