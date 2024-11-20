"use client";

import Carousel from "@/components/carousels/Carousel";
import BrandCard from "./BrandCard";
import useBrands from "@/hooks/useBrands";
import BrandsSkeleton from "./BrandsSkeleton";

const Brands = () => {
  const { data: brands, loading } = useBrands();

  if (loading) {
    return <BrandsSkeleton />;
  }

  return (
    <div className="mt-6">
      <Carousel>
        {brands?.map((brand) => (
          <BrandCard key={brand?.id} brand={brand} />
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
