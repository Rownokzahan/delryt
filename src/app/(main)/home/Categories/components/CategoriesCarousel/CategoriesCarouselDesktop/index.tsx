import Carousel from "@/components/Carousel";
import CategoryCard from "../../CategoryCard";
import { Category } from "@/types";

interface CategoriesCarouselDesktopProps {
  categories: Category[];
}

const CategoriesCarouselDesktop = ({
  categories,
}: CategoriesCarouselDesktopProps) => {
  return (
    <Carousel containerClasses="hidden sm:block">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Carousel>
  );
};

export default CategoriesCarouselDesktop;
