"use client";

import ProductsCarouselSection from "@/components/ProductsCarouselSection";
import { useGetLatestProductsQuery } from "@/store/products/productsApi";

const LatestProducts = () => {
  const { data: products = [], isLoading, error } = useGetLatestProductsQuery();

  if (error) {
    console.error("Failed to fetch latest products:", error);
  }

  return (
    <ProductsCarouselSection
      titleRegular="Taste the Latest"
      titleBold="Delicious Additions"
      products={products}
      isLoading={isLoading}
    />
  );
};

export default LatestProducts;
