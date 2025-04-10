import ProductCardSkeleton from "@/cards/ProductCard/ProductCardSkeleton";

const ProductsCarouselSkeleton = () => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-3">
        {[...Array(3)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>

      <div className="md:hidden w-[70%] sm:w-[43%]">
        <ProductCardSkeleton noMobileLayoutShift={true} />
      </div>
    </div>
  );
};

export default ProductsCarouselSkeleton;
