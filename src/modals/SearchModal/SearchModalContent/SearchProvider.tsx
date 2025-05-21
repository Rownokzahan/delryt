"use client";

import { useGetSearchedProductsMutation } from "@/store/features/products/productsApi";
import { Product, ProductType } from "@/types";
import { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (val: string) => void;

  selectedProductType: ProductType;
  setSelectedProductType: (val: ProductType) => void;

  products: Product[];
  isProductsLoading: boolean;

  triggerSearch: ReturnType<typeof useGetSearchedProductsMutation>[0];
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProvider {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: SearchProvider) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductType, setSelectedProductType] =
    useState<ProductType>("all");

  const [triggerSearch, { data: products = [], isLoading: isProductsLoading }] =
    useGetSearchedProductsMutation();

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,

        selectedProductType,
        setSelectedProductType,

        products,
        isProductsLoading,

        triggerSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("useSearch must be used within a SearchProvider");
  return context;
};
