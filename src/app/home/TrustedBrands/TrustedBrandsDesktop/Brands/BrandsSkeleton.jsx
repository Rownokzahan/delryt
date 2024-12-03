import CarouselDotsSkeleton from "@/components/carousels/CarouselDotsSkeleton";

const BrandsSkeleton = () => {
  return (
    <div className="mt-6">
      <div className="flex gap-6 justify-center">
        <div className="bg-gray-200 w-full aspect-[160/107] animate-pulse" />
        <div className="bg-gray-200 w-full aspect-[160/107] animate-pulse hidden sm:block" />
        <div className="bg-gray-200 w-full aspect-[160/107] animate-pulse hidden sm:block" />
      </div>

      {/* Placeholder for carousel dots */}
      <CarouselDotsSkeleton />
    </div>
  );
};

export default BrandsSkeleton;
