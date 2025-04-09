import ProductCard from "@/cards/ProductCard";
import { Product } from "@/types";

interface ProductsCarouselMobileProps {
  products: Product[];
}

const ProductsCarouselMobile = ({ products }: ProductsCarouselMobileProps) => {
  return (
    <div className="md:hidden mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCarouselMobile;
