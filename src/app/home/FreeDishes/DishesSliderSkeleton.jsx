const DishesSliderSkeleton = () => {
  return (
    <div className="mt-6 pb-1 flex gap-4 overflow-x-auto">
      {[...Array(7)].map((_, index) => (
        <div key={index} className="w-32 shadow-white flex-shrink-0">
          <svg className="rounded-t-lg w-full h-[84px] animate-pulse bg-gray-400"></svg>
          <div className="p-3 rounded-b-lg bg-white">
            <p className="h-[11px] mx-4 animate-pulse rounded-md bg-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishesSliderSkeleton;
