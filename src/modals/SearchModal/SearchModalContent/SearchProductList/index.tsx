import SearchProductCard from "./SearchProductCard";
import ProductTypeFilter from "@/components/ui/ProductTypeFilter";
import SearchProductListSkeleton from "./SearchProductListSkeleton";
import { useSearch } from "../SearchProvider";

const SearchProductList = () => {
  const {
    searchQuery,
    isProductsLoading,
    selectedProductType,
    products,
    setSelectedProductType,
  } = useSearch();

  if (searchQuery === "") {
    return null;
  }

  if (isProductsLoading) {
    return <SearchProductListSkeleton />;
  }

  return (
    <div className="h-[calc(100%-48px)]">
      <div className="h-16 flex justify-between items-center">
        <p className="text-sm">
          Showing <span className="font-medium">{products.length}</span> results
        </p>

        <div className="border rounded-md text-sm">
          <ProductTypeFilter
            selectedProductType={selectedProductType}
            setSelectedProductType={setSelectedProductType}
          />
        </div>
      </div>

      {products.length === 0 ? (
        <p className="pt-6 text-center text-sm font-medium text-gray-400">
          No results found.
        </p>
      ) : (
        <div
          className="h-[calc(100%-64px)] overflow-y-auto space-y-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {products.map((product) => (
            <SearchProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProductList;
