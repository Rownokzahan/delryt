import { Category, Id } from "@/types";
import clsx from "clsx";
import { useState } from "react";

interface CategorySliderProps {
  category: Category;
}

const CategorySlider = ({ category }: CategorySliderProps) => {
  const [activeCategoryId, setActiveCategoryId] = useState(category.id);

  const getButtonClasses = (id: Id) =>
    clsx(
      "whitespace-nowrap px-3 py-2 border-b-2 transition-colors duration-200",
      activeCategoryId === id
        ? "border-primary text-uiBlack font-medium"
        : "border-transparent text-uiBlack-light/60 hover:text-uiBlack"
    );

  return (
    <div
      className="py-2 border-b sm:border-b-0 flex items-center gap-2 overflow-x-auto scroll-smooth"
      style={{
        scrollbarWidth: "thin",
        scrollbarGutter: "unset",
        scrollbarColor: "gray transparent",
      }}
    >
      <button
        onClick={() => setActiveCategoryId(category.id)}
        className={getButtonClasses(category.id)}
      >
        All
      </button>

      {category.childes?.map((child) => (
        <button
          key={child.id}
          onClick={() => setActiveCategoryId(child.id)}
          className={getButtonClasses(child.id)}
        >
          {child.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
