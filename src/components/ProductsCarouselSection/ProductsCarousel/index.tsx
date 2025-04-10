"use client";

import ProductsCarouselDesktop from "./ProductsCarouselDesktop";
import ProductsCarouselMobile from "./ProductsCarouselMobile";
import ProductsCarouselSkeleton from "./ProductsCarouselSkeleton";
import { Product } from "@/types";

interface ProductsCarouselProps {
  products: Product[];
  isLoading: boolean;
}

const ProductsCarousel = ({ products, isLoading }: ProductsCarouselProps) => {
  if (isLoading) {
    return <ProductsCarouselSkeleton />;
  }

  return (
    <div>
      <ProductsCarouselDesktop products={products} />
      <ProductsCarouselMobile products={products} />
    </div>
  );
};

export default ProductsCarousel;
