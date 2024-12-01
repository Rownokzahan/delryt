import Button from "@/components/Button";
import { IoChevronForward } from "react-icons/io5";
import CuisineCarousel from "./CuisineCarouselDesktop";

const PopularCuisinesDesktop = () => {
  return (
    <div className="bg-primary">
      <div className="ui-container py-12">
        <div className="mb-10 flex items-center gap-6 justify-between">
          <div className="flex gap-4">
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
              <path
                fill="#fff"
                d="M61.966 12.135V9.1h-3.033V6.067h-3.034V3.034h-3.034V.056 0H12.08v3.034H9.045v3.033H6.01v3.034H3.034v3.034H0v40.73h3.034V55.9h3.033v3.034h3.034v3.033h3.034V65h40.73v-3.034H55.9v-3.033h3.034v-3.034h3.033v-3.034H65v-40.73h-3.034z"
              ></path>
              <path
                fill="#43B500"
                d="M44.997 21.066c0 .39.202-.736-2.86 13.934-.168-.865-.134.995-.134-15.06.908-1.73 2.994-.908 2.994 1.126zM40 15.456V33c-3.821-8.114-2.143-4.561-4-8.465v-9.079c0-1.36.893-2.456 2-2.456 1.143 0 2 1.097 2 2.456zM38 30l-1.887-1.834c-1.667-1.62-3.817-2.516-6.45-2.516l-4.344-7.08c-.659-1.152-.264-2.602.877-3.241 1.185-.683 2.677-.256 3.335.853C36.201 26.929 32.822 21.257 38 30zM41 39.292c0 3.95-1.571 7.728-4.452 10.518-1.397 1.374-3.23 2.147-5.195 2.19h-3.405C23.016 52 19 48.05 19 43.2V31.135c0-.387.306-.73.742-.73.044 0 .131 0 .175-.043.218.086 2.008.043 3.23 1.803.786 1.03.742 2.232.742 3.005 0 2.705 1.178 5.28 3.23 7.04 2.226 1.933 5.718.344 5.718-2.575 0-3.22.131-3.95-.436-5.238-.524-1.116-1.135-1.631-2.008-2.404-.306-.214.087-.171-5.937-.171-.785-1.374-2.27-2.448-4.06-2.662.088-.687.437-1.331 1.092-1.76 1.048-.515-.13-.387 7.857-.387 2.008 0 3.929.773 5.37 2.19l5.281 5.194.393.687c.35 1.374.611 2.62.611 4.207z"
              ></path>
            </svg>
            <div className="text-white">
              <h3 className="text-3xl">Popular Cuisines in your area</h3>
              <p className="text-lg">
                Curated specials from India’s most trusted restaurants
              </p>
            </div>
          </div>

          <Button variant="secondary-outline" className="h-max gap-2">
            <span>Explore All Dishes</span>
            <IoChevronForward className="text-lg" />
          </Button>
        </div>
        <CuisineCarousel />
      </div>
    </div>
  );
};

export default PopularCuisinesDesktop;
