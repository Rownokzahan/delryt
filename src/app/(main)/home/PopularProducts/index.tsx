"use client";

import ProductsCarouselSection from "@/components/ProductsCarouselSection";
import { useGetPopularProductsQuery } from "@/store/products/productsApi";

const PopularProducts = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useGetPopularProductsQuery();

  if (error) {
    console.error("Failed to fetch popular products:", error);
  }

  return (
    <ProductsCarouselSection
      titleRegular="Popular on"
      titleBold="This App"
      products={products}
      isLoading={isLoading}
    />
  );
};

export default PopularProducts;
