const CarouselDotsSkeleton = () => {
  return (
    <div className="flex gap-2 justify-center mt-4 animate-pulse">
      <div className="w-5 h-[6px] bg-gray-200 rounded-3xl" />
      <div className="w-[6px] h-[6px] bg-gray-200 rounded-3xl" />
      <div className="w-[6px] h-[6px] bg-gray-200 rounded-3xl" />
      <div className="w-[6px] h-[6px] bg-gray-200 rounded-3xl" />
    </div>
  );
};

export default CarouselDotsSkeleton;
