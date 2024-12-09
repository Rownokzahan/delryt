import Button from "@/components/Button";
import BrandIcons from "./BrandIcons";
import { IoChevronForward } from "react-icons/io5";
import Brands from "./Brands";

const TrustedBrandsDesktop = () => {
  return (
    <section className="ui-container py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">
          <span>Choose From Trusted Restaurants in</span>
          <span className="text-primary font-semibold"> One Single Order</span>
        </h3>
        {/* Button to explore more restaurants */}
        <Button variant="secondary" className="h-max gap-2">
          <span>Explore Restaurants</span>
          <IoChevronForward className="text-lg" />
        </Button>
      </div>

      {/* Brand icons and details */}
      <BrandIcons />
      <Brands />
    </section>
  );
};

export default TrustedBrandsDesktop;
