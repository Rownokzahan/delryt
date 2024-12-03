const ComboCardSkeleton = () => {
  return (
    <div className="px-3">
      <div className="border rounded-md shadow pb-1 animate-pulse">
        {/* Placeholder for combo image */}
        <div className="w-full rounded-t-md aspect-[280/187] bg-gray-300" />

        {/* Skeleton card content */}
        <div className="p-3 rounded-b-md">
          <div className="mt-1 mb-4 flex gap-2">
            {/* Placeholder for veg/non-veg indicator */}
            <div className="size-4 rounded bg-gray-300" />

            {/* Placeholder for name */}
            <div className="space-y-3 flex-1">
              <div className="h-3 sm:h-5 w-3/4 rounded-full bg-gray-200" />
              <div className="h-3 sm:h-5 w-1/2 rounded-full bg-gray-200 xl:hidden" />
            </div>
          </div>

          {/* Placeholder for price */}
          <div className="w-12 h-3 sm:h-6 rounded-full bg-gray-200" />

          {/* Placeholder for button section */}
          <div className="mt-3 pt-3 border-t">
            <div className="rounded w-28 h-10 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCardSkeleton;
