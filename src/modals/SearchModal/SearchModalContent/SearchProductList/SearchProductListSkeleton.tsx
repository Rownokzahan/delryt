import SearchProductCardSkeleton from "./SearchProductCard/SearchProductCardSkeleton";

const SearchProductListSkeleton = () => {
  return (
    <div className="h-[calc(100%-48px)]">
      <div className="h-16 flex items-center justify-end">
        <div className="h-9 w-44 rounded-md bg-gray-100 animate-pulse" />
      </div>

      <div
        className="h-[calc(100%-64px)] overflow-y-auto space-y-2"
        style={{ scrollbarWidth: "thin" }}
      >
        {[...Array(3)].map((_, index) => (
          <SearchProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchProductListSkeleton;
