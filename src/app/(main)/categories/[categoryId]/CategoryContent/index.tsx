import { Category, ProductType } from "@/types";
import CategoryBanner from "./CategoryBanner";
import CategorySlider from "./CategorySlider";
import ProductList from "./ProductList";
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

      <section className="ui-container">
        <div className="sticky top-0 sm:border-b flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm sm:text-base">
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

        <ProductList />
      </section>
    </main>
  );
};

export default CategoryContent;
