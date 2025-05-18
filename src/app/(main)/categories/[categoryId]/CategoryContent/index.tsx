import { Category } from "@/types";
import CategoryBanner from "./CategoryBanner";
import CategorySlider from "./CategorySlider";
import VegNonVegFilter from "./VegNonVegFilter";

interface CategoryContentProps {
  category: Category;
}

const CategoryContent = ({ category }: CategoryContentProps) => {
  return (
    <main className="bg-gray-100">
      <CategoryBanner category={category} />

      <section className="ui-container">
        <div className="sticky top-0 sm:border-b flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm sm:text-base">
          <div className="flex-1 overflow-hidden">
            <CategorySlider category={category} />
          </div>

          <div className="mx-auto py-2">
            <VegNonVegFilter />
          </div>
        </div>

        <div className="h-screen"></div>
      </section>
    </main>
  );
};

export default CategoryContent;
