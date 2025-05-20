import { Product, ProductType } from "@/types";
import SearchProductCard from "./SearchProductCard";
import ProductTypeFilter from "@/components/ui/ProductTypeFilter";
import SearchProductListSkeleton from "./SearchProductListSkeleton";

interface SearchProductListProps {
  isLoading: boolean;
  searchQuery: string;
  products: Product[];
  selectedProductType: ProductType;
  setSelectedProductType: (productType: ProductType) => void;
}

const SearchProductList = ({
  isLoading,
  searchQuery,
  products,
  selectedProductType,
  setSelectedProductType,
}: SearchProductListProps) => {
  if (isLoading) {
    return <SearchProductListSkeleton />;
  }

  if (searchQuery.trim() === "") {
    return null;
  }

  return (
    <>
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
        <p className="pt-6 text-center text-sm font-medium text-gray-400">No results found.</p>
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
    </>
  );
};

export default SearchProductList;
