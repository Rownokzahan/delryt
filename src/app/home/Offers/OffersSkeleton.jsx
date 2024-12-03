import CarouselDotsSkeleton from "@/components/carousels/CarouselDotsSkeleton";

const OffersSkeleton = () => {
  return (
    <div className="ui-container py-2 md:py-6">
      <div className="flex gap-6 justify-center">
        <div className="rounded-xl bg-gray-200 w-full aspect-[2/1] animate-pulse" />
        <div className="rounded-xl bg-gray-200 w-full aspect-[2/1] animate-pulse hidden sm:block" />
        <div className="rounded-xl bg-gray-200 w-full aspect-[2/1] animate-pulse hidden sm:block" />
      </div>

      {/* Placeholder for carousel dots */}
      <CarouselDotsSkeleton />
    </div>
  );
};

export default OffersSkeleton;
