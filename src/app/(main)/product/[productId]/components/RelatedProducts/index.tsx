"use client";

import ProductsCarouselSection from "@/components/ProductsCarouselSection";
import { useGetRelatedProductsByIdQuery } from "@/store/features/product/productApi";
import { Id } from "@/types";

interface RelatedProductsProps {
  productId: Id;
}

const RelatedProducts = ({ productId }: RelatedProductsProps) => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useGetRelatedProductsByIdQuery(productId);

  if (error) {
    console.log("Failed to fetch related products:", error);
  }

  return (
    <ProductsCarouselSection
      titleRegular="You May Also Like"
      titleBold="Related Products"
      products={products}
      isLoading={isLoading}
    />
  );
};

export default RelatedProducts;
