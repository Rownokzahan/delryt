"use client";

import { useEffect, useState } from "react";
import SearchProductList from "./SearchProductList";
import { ProductType } from "@/types";
import { useGetSearchedProductsMutation } from "@/store/features/products/productsApi";
import SearchBox from "./SearchBox";

const SearchModalContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductType, setSelectedProductType] =
    useState<ProductType>("all");

  const [triggerSearch, { data: products = [], isLoading }] =
    useGetSearchedProductsMutation();

  // Debounce search input
  useEffect(() => {
    const trimmedQuery = searchQuery.trim();

    if (trimmedQuery === "") {
      return;
    }

    const delayDebounce = setTimeout(() => {
      triggerSearch({ name: trimmedQuery, productType: selectedProductType });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, selectedProductType, triggerSearch]);

  return (
    <>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="h-[calc(100dvh-130px)] sm:h-[72dvh]">
        <SearchProductList
          isLoading={isLoading}
          searchQuery={searchQuery}
          products={products}
          selectedProductType={selectedProductType}
          setSelectedProductType={setSelectedProductType}
        />
      </div>
    </>
  );
};

export default SearchModalContent;
