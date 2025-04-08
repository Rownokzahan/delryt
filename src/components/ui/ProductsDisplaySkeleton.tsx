import ProductCardSkeleton from "@/cards/ProductCard/ProductCardSkeleton";

const ProductsDisplaySkeleton = () => {
  return (
    <div className="ui-container py-8 flex gap-12">
      {/* Product Sidebar  */}
      <div className="hidden md:block w-[30%] lg:w-1/4 space-y-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="h-12 bg-gray-200 rounded-md" />
        ))}
      </div>
      {/* Product Collection Placeholder */}
      <div className="flex-1">
        <div className="h-16 mb-8 bg-gray-200" />
        <div className="h-6 w-8/12 mb-4 bg-gray-200" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplaySkeleton;
