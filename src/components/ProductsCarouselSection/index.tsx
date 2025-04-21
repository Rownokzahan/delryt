import { Product } from "@/types";
import ProductsCarousel from "./ProductsCarousel";

interface ProductsCarouselSectionProps {
  titleRegular: string;
  titleBold: string;
  products: Product[];
  isLoading: boolean;
}

const ProductsCarouselSection: React.FC<ProductsCarouselSectionProps> = ({
  titleRegular,
  titleBold,
  products,
  isLoading,
}) => {
  if (!isLoading && products.length === 0) {
    return null;
  }

  return (
    <section className="ui-container py-11 relative">
      {/* Section Title */}
      <h3 className="mb-6 md:mb-3 text-2xl capitalize">
        <span>{titleRegular}</span>{" "}
        <span className="font-semibold">{titleBold}</span>
      </h3>

      {/* Carousel */}
      <ProductsCarousel products={products} isLoading={isLoading} />
    </section>
  );
};

export default ProductsCarouselSection;
