import CategoryProductListSkeleton from "./CategoryContent/CategoryProductList/CategoryProductListSkeleton";

const CategoryContentSkeleton = () => {
  return (
    <main className="bg-gray-100">
      {/* Banner placeholder */}
      <section className="mt-2 h-48 bg-gray-300 animate-pulse" />

      {/* Filters placeholder */}
      <section className="h-27 md:h-14 bg-gray-200 animate-pulse" />

      {/* Product list placeholder */}
      <section className="min-h-[60dvh] ui-container pb-8 pt-4 md:pt-8 relative">
        <CategoryProductListSkeleton />
      </section>
    </main>
  );
};

export default CategoryContentSkeleton;
