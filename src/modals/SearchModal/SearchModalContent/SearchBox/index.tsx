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
    const sanitizedQuery = searchInputValue.trim().replace(/\s{2,}/g, " ");
    if (sanitizedQuery.length < 3) {
      return;
    }

    const debounceTimeout = setTimeout(() => {
      setSearchQuery(sanitizedQuery);
    }, 400);

    return () => clearTimeout(debounceTimeout);
  }, [searchInputValue, setSearchQuery]);

  useEffect(() => {
    if (searchQuery) {
      triggerSearch({ name: "", productType: selectedProductType })
        .unwrap()
        .then((result) => {
          if (result.length > 0) {
            setRecentSearches((prev) => {
              const updated = [
                searchQuery,
                ...prev.filter((q) => q !== searchQuery),
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
      <div className="h-12 border rounded-lg shadow-sm flex items-center">
        <div className="shrink-0 ms-3 mb-[3px] me-1">
          <RiSearchLine className="text-xl text-uiBlack/30" />
        </div>

        <input
          type="text"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder="What would you like to eat today?"
          className="w-full p-1 outline-hidden text-sm font-medium placeholder:text-uiBlack/30"
        />
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
