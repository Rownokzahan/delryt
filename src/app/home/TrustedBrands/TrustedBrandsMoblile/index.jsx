import Button from "@/components/Button";
import BrandCarouselMobile from "./BrandCarouselMobile";

const TrustedBrandsMoblile = ({ brands }) => {
  return (
    <div className="ui-container py-4">
      <h3 className="text-xl text-center font-semibold mb-2">
        Entire FoodCourt, in ONE delivery!
      </h3>

      <BrandCarouselMobile brands={brands} />

      <Button variant="primary-outline" className="font-normal mx-auto mt-4">
        Explore All Restaurants
      </Button>
    </div>
  );
};

export default TrustedBrandsMoblile;
