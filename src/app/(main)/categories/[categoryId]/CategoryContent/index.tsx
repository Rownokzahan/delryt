import { Category } from "@/types";
import CategoryBanner from "./CategoryBanner";
import CategorySlider from "./CategorySlider";
import VegNonVegFilter from "./VegNonVegFilter";
import ProductList from "./ProductList";
import { useState } from "react";

interface CategoryContentProps {
  category: Category;
}

const CategoryContent = ({ category }: CategoryContentProps) => {
  const [activeCategoryId, setActiveCategoryId] = useState(category.id);

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
            <VegNonVegFilter />
          </div>
        </div>

        <ProductList />
      </section>
    </main>
  );
};

export default CategoryContent;
