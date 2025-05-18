import { Category, ProductType } from "@/types";
import CategoryBanner from "./CategoryBanner";
import CategorySlider from "./CategorySlider";
import CategoryProductList from "./CategoryProductList";
import { useState } from "react";
import ProductTypeFilter from "./ProductTypeFilter";

interface CategoryContentProps {
  category: Category;
}

const CategoryContent = ({ category }: CategoryContentProps) => {
  const [activeCategoryId, setActiveCategoryId] = useState(category.id);
  const [selectedProductType, setSelectedProductType] =
    useState<ProductType>("all");

  return (
    <main className="bg-gray-100">
      <CategoryBanner category={category} />

      <section className="sticky z-10 bg-gray-100 top-0">
        <div className="ui-container sm:border-b flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm sm:text-base">
          <div className="flex-1 overflow-hidden">
            <CategorySlider
              category={category}
              activeCategoryId={activeCategoryId}
              setActiveCategoryId={setActiveCategoryId}
            />
          </div>
          <div className="mx-auto py-2">
            <ProductTypeFilter
              selectedProductType={selectedProductType}
              setSelectedProductType={setSelectedProductType}
            />
          </div>
        </div>
      </section>

      <section className="min-h-[60dvh] ui-container pb-8 pt-4 md:pt-8 relative">
        <CategoryProductList
          activeCategoryId={activeCategoryId}
          selectedProductType={selectedProductType}
        />
      </section>
    </main>
  );
};

export default CategoryContent;
