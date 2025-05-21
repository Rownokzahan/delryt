import { useEffect } from "react";
import { useSearch } from "../SearchProvider";

interface RecentSearchesProps {
  recentSearches: string[];
  setRecentSearches: (val: string[]) => void;
  setSearchInputValue: (value: string) => void;
}

const RecentSearches = ({
  recentSearches,
  setRecentSearches,
  setSearchInputValue,
}: RecentSearchesProps) => {
  const { searchQuery } = useSearch();

  useEffect(() => {
    const storedSearches = JSON.parse(
      localStorage.getItem("recent-searches") || "[]"
    );
    setRecentSearches(storedSearches);
  }, [setRecentSearches]);

  const handleClear = () => {
    localStorage.removeItem("recent-searches");
    setRecentSearches([]);
  };

  if (searchQuery !== "") {
    return null;
  }

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="py-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-uiBlack/80">Recent Searches</h3>
        {recentSearches.length > 0 && (
          <button
            onClick={handleClear}
            className="text-xs text-uiBlack-light hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="mt-2 flex items-center gap-2 flex-wrap text-sm">
        {recentSearches.map((term) => (
          <button
            key={term}
            onClick={() => setSearchInputValue(term)}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
