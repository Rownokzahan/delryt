const BrandsSkeleton = () => {
  return (
    <div className="mt-6">
      <div className="flex gap-6 justify-center">
        <div className="bg-gray-200 w-full aspect-[160/107] animate-pulse" />
        <div className="bg-gray-200 w-full aspect-[160/107] animate-pulse hidden sm:block" />
        <div className="bg-gray-200 w-full aspect-[160/107] animate-pulse hidden sm:block" />
      </div>

      <div className="flex gap-2 justify-center mt-2">
        <div className="w-5 h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
        <div className="w-[6px] h-[6px] bg-gray-200 animate-pulse rounded-3xl" />
      </div>
    </div>
  );
};

export default BrandsSkeleton;