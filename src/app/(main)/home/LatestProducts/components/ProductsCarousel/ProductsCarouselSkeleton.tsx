import ProductCardSkeleton from "@/cards/ProductCard/ProductCardSkeleton";
import CarouselDotsSkeleton from "@/components/Carousel/CarouselDotsSkeleton";

const ProductsCarouselSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {[...Array(3)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>

      <div className="hidden md:block">
        <CarouselDotsSkeleton />
      </div>
    </div>
  );
};

export default ProductsCarouselSkeleton;
