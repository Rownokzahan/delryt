"use client";

import { useGetLatestProductsQuery } from "@/store/products/productsApi";
import ProductsCarouselDesktop from "./ProductsCarouselDesktop";
import ProductsCarouselMobile from "./ProductsCarouselMobile";
import ProductsCarouselSkeleton from "./ProductsCarouselSkeleton";

const ProductsCarousel = () => {
  const { data: products = [], isLoading, error } = useGetLatestProductsQuery();

  if (isLoading) {
    return <ProductsCarouselSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch banners:", error);
  }

  return (
    <div>
      <ProductsCarouselDesktop products={products} />
      <ProductsCarouselMobile products={products} />
    </div>
  );
};

export default ProductsCarousel;
