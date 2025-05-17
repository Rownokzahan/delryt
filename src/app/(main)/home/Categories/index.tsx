import Button from "@/components/ui/Button";
import CategoriesCarousel from "./components/CategoriesCarousel";
import { IoChevronForward } from "react-icons/io5";

const Categories = () => {
  return (
    <section className="bg-gray-50">
      <div className="ui-container pt-11 pb-24 sm:pb-8 relative">
        <div className="mb-6 flex items-center justify-between">
          {/* Section Title */}
          <h3 className="text-2xl">
            <span>Most Loved</span>{" "}
            <span className="font-semibold">Categories</span>
          </h3>

          {/* Explore All Categories Button */}
          <Button
            href={`/categories`}
            variant="primary"
            className="h-max w-max gap-2 absolute bottom-12 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <span>Explore All Categories</span>
            <IoChevronForward className="text-lg" />
          </Button>
        </div>

        <CategoriesCarousel />
      </div>
    </section>
  );
};

export default Categories;
