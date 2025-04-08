import FreeDishCardSkeleton from "../FreeDishCard/FreeDishCardSkeleton";

const FreeDishSliderSkeleton = () => {
  return (
    <div className="mt-6 pb-1 flex gap-4 overflow-x-auto">
      {[...Array(7)].map((_, index) => (
        <FreeDishCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default FreeDishSliderSkeleton;
