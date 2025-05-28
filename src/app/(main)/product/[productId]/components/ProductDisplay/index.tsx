"use client";

import { useGetProductDetailsByIdQuery } from "@/store/features/product/productApi";
import { Id } from "@/types";
import ProductContent from "./ProductContent";
import ProductContentSkeleton from "./ProductContent/ProductContentSkeleton";

interface ProductDisplayProps {
  productId: Id;
}

const ProductDisplay = ({ productId }: ProductDisplayProps) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsByIdQuery(productId);

  if (isLoading) {
    return <ProductContentSkeleton />;
  }

  if (!product || isError) {
    return (
      <div className="ui-container py-12 text-center text-uiBlack-muted">
        <h2 className="text-xl font-medium mb-2">Product Not Found</h2>
        <p>Please try again or select a different product.</p>
      </div>
    );
  }

  console.log(product);

  return <ProductContent product={product} />;
};

export default ProductDisplay;
