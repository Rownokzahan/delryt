import ProductCard from "@/cards/ProductCard";
import { useGetProductsByCategoryIdQuery } from "@/store/features/category/categoryApi";
import { Id, ProductType } from "@/types";
import CategoryProductListSkeleton from "./CategoryProductListSkeleton";
import CategoryProductsNotFound from "./CategoryProductsNotFound";

interface CategoryProductListProps {
  activeCategoryId: Id;
  selectedProductType: ProductType;
}

const CategoryProductList = ({
  activeCategoryId,
  selectedProductType,
}: CategoryProductListProps) => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useGetProductsByCategoryIdQuery({
    categoryId: activeCategoryId,
    productType: selectedProductType,
  });

  if (isLoading) {
    return <CategoryProductListSkeleton />;
  }

  if (error) {
    console.error("Error fetching category products:", error);
  }

  if (products.length === 0) {
    return <CategoryProductsNotFound />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-0">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CategoryProductList;
