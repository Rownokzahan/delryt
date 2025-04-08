import BannerCardSkeleton from "@/cards/BannerCard/BannerCardSkeleton";
import CarouselDotsSkeleton from "@/components/Carousel/CarouselDotsSkeleton";

const BannersSkeleton = () => {
  return (
    <div className="ui-container py-2 md:py-6">
      <div className="hidden sm:flex gap-6 justify-center">
        {[...Array(3)].map((_, index) => (
          <BannerCardSkeleton key={index} />
        ))}
      </div>

      <div className="sm:hidden">
        <BannerCardSkeleton />
      </div>

      {/* Placeholder for carousel dots */}
      <CarouselDotsSkeleton />
    </div>
  );
};

export default BannersSkeleton;
