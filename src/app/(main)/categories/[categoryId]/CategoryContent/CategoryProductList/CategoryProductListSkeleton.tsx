import ProductCardSkeleton from "@/cards/ProductCard/ProductCardSkeleton";

const CategoryProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-0">
      {[...Array(6)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CategoryProductListSkeleton;
