import ProductCardSkeleton from "@/cards/ProductCard/ProductCardSkeleton";
import CarouselDotsSkeleton from "@/components/Carousel/CarouselDotsSkeleton";

const ProductsCarouselSkeleton = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
          {[...Array(3)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>

        <CarouselDotsSkeleton />
      </div>

      <div className="md:hidden w-[70%] sm:w-[43%]">
        <ProductCardSkeleton noMobileLayoutShift={true} />
      </div>
    </div>
  );
};

export default ProductsCarouselSkeleton;
