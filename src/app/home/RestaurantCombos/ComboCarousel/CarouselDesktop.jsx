import Carousel from "@/components/carousels/Carousel";
import ComboCard from "../ComboCard";

const CarouselDesktop = ({ combos }) => {
  return (
    <Carousel slidesToShow={4}>
      {combos?.map((combo) => (
        <ComboCard key={combo?.id} combo={combo} />
      ))}
    </Carousel>
  );
};

export default CarouselDesktop;
