"use client";

import SearchBox from "./SearchBox";
import SearchProductList from "./SearchProductList";
import SearchProvider from "./SearchProvider";

const SearchModalContent = () => {
  return (
    <SearchProvider>
      <div className="h-[calc(100dvh-80px)] sm:h-[76dvh]">
        <SearchBox />

        <SearchProductList />
      </div>
    </SearchProvider>
  );
};

export default SearchModalContent;
