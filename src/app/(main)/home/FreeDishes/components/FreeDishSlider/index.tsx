import FreeDishCard from "../FreeDishCard";
import dishesData from "./dishesData";
import FreeDishSliderSkeleton from "./FreeDishSliderSkeleton";

const FreeDishSlider = () => {
  const { data: dishes } = dishesData;
  const isLoading = false;

  if (isLoading) {
    return <FreeDishSliderSkeleton />;
  }

  return (
    <div className="mt-6 pb-1 flex gap-4 overflow-x-auto custom-scrollbar">
      {dishes?.map((dish) => (
        <FreeDishCard key={dish?.id} dish={dish} />
      ))}
    </div>
  );
};

export default FreeDishSlider;
