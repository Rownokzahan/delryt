import ProductCard from "@/cards/ProductCard";
import Carousel from "@/components/Carousel";
import { Product } from "@/types";

interface ProductsCarouselDesktopProps {
  products: Product[];
}

const ProductsCarouselDesktop = ({
  products,
}: ProductsCarouselDesktopProps) => {
  return (
    <div className="hidden md:block">
      <Carousel slidesToShow={4} containerClasses="hidden lg:block">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>

      <Carousel containerClasses="lg:hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsCarouselDesktop;
