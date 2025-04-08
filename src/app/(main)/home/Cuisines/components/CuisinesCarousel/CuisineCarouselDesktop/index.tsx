import Carousel from "@/components/Carousel";
import { Cuisine } from "@/types";
import CuisineCard from "../../CuisineCard";


interface CuisineCarouselDesktopProps {
  cuisines: Cuisine[];
}

const CuisineCarouselDesktop = ({ cuisines }: CuisineCarouselDesktopProps) => {
  return (
    <Carousel
      slidesToShow={4}
      containerClasses="hidden sm:block popular-cuisines"
    >
      {cuisines?.map((cuisine) => (
        <CuisineCard key={cuisine?.id} cuisine={cuisine} />
      ))}
    </Carousel>
  );
};

export default CuisineCarouselDesktop;
