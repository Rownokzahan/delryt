"use client";

import DishesSliderSkeleton from "./DishesSliderSkeleton";
import DishCard from "./DishCard";
import useFreeDishes from "@/hooks/useFreeDishes";

const DishesSlider = () => {
  const { data: dishes, loading } = useFreeDishes();

  if (loading) {
    return <DishesSliderSkeleton />;
  }

  return (
    <div
      className="mt-6 pb-1 flex gap-4 overflow-x-auto"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(192, 192, 201,0.4) transparent",
      }}
    >
      {dishes?.map((dish) => (
        <DishCard key={dish?.id} dish={dish} />
      ))}
    </div>
  );
};

export default DishesSlider;
