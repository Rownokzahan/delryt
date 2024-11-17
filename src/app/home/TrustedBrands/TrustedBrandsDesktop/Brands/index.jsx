import Carousel from "@/components/carousels/Carousel";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
  return (
    <div className="mt-6">
      <Carousel>
        {brands.map((brand) => (
          <BrandCard key={brand?.id} brand={brand} />
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
