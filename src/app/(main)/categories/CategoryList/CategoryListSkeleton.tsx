import CategoryCardSkeleton from "@/cards/CategoryCard/CategoryCardSkeleton";

const CategoryListSkeleton = () => {
  return (
    <div className="-mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, index) => (
        <CategoryCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CategoryListSkeleton;
