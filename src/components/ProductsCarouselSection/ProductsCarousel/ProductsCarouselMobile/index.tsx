import ProductCard from "@/cards/ProductCard";
import { Product } from "@/types";
import Slider from "react-slick";

interface ProductsCarouselMobileProps {
  products: Product[];
}

const ProductsCarouselMobile = ({ products }: ProductsCarouselMobileProps) => {
  const settings = {
    infinite: false,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="md:!hidden -me-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          noMobileLayoutShift={true}
        />
      ))}
    </Slider>
  );
};

export default ProductsCarouselMobile;
