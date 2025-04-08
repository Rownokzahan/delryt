const FreeDishCardSkeleton = () => {
  return (
    <div className="w-32 shadow-white shrink-0">
      <svg className="rounded-t-lg w-full h-[84px] animate-pulse bg-gray-400"></svg>
      <div className="p-3 rounded-b-lg bg-white">
        <p className="h-[11px] mx-4 animate-pulse rounded-md bg-gray-400" />
      </div>
    </div>
  );
};

export default FreeDishCardSkeleton;
