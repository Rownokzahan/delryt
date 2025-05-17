const CategoryCardSkeleton = () => {
  return (
    <div className="p-3">
      <div
        className="block p-3 hover:scale-105 duration-300"
        style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 16px 0px" }}
      >
        {/* Placeholder for image */}
        <div className="relative w-full aspect-100/67 bg-gray-200 animate-pulse">
          <span className="border-[16px] border-s-transparent border-b-transparent border-white absolute -top-px -right-px"></span>
        </div>

        <div className="my-3 flex justify-between items-center gap-3 animate-pulse">
          {/* Placeholder for text */}
          <div className="w-3/4 h-5 bg-gray-200" />

          {/* Placeholder for badge */}
          <span className="size-6 polygon-2 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCardSkeleton;