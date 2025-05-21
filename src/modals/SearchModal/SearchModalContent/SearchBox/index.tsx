import { RiSearchLine } from "react-icons/ri";
import { useSearch } from "../SearchProvider";
import { useEffect, useState } from "react";
import RecentSearches from "./RecentSearches";

const SearchBox = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const { searchQuery, setSearchQuery, triggerSearch, selectedProductType } =
    useSearch();

  useEffect(() => {
    const sanitizedValue = searchInputValue.trim().replace(/\s{2,}/g, " ");

    const debounceTimeout = setTimeout(() => {
      if (sanitizedValue.length > 2) {
        setSearchQuery(sanitizedValue);
      } else {
        setSearchQuery("");
      }
    }, 800);

    return () => clearTimeout(debounceTimeout);
  }, [searchInputValue, setSearchQuery]);

  useEffect(() => {
    if (searchQuery) {
      triggerSearch({ name: searchQuery, productType: selectedProductType })
        .unwrap()
        .then((result) => {
          if (result.length > 0) {
            setRecentSearches((prev) => {
              const updated = [
                searchQuery,
                ...prev.filter((item) => item !== searchQuery),
              ].slice(0, 5);

              localStorage.setItem("recent-searches", JSON.stringify(updated));
              return updated;
            });
          }
        });
    }
  }, [searchQuery, selectedProductType, triggerSearch]);

  return (
    <>
      <div className="h-12 px-3 border rounded-lg shadow-sm flex items-center">
        <div className="shrink-0 mb-[3px] me-1">
          <RiSearchLine className="text-xl text-uiBlack/30" />
        </div>

        <input
          type="text"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder="What would you like to eat today?"
          className="w-full p-1 outline-hidden text-sm font-medium placeholder:text-uiBlack/30"
        />

        {searchInputValue && (
          <button
            onClick={() => setSearchInputValue("")}
            className="py-2 text-xs font-medium text-uiBlack-light/80"
          >
            Clear
          </button>
        )}
      </div>

      <RecentSearches
        recentSearches={recentSearches}
        setRecentSearches={setRecentSearches}
        setSearchInputValue={setSearchInputValue}
      />
    </>
  );
};

export default SearchBox;
