import Carousel from "@/components/carousels/Carousel";
import ComboCard from "../ComboCard";

const CarouselDesktop = ({ combos, openComboModal }) => {
  return (
    <Carousel slidesToShow={4}>
      {combos?.map((combo) => (
        <ComboCard
          key={combo?.id}
          combo={combo}
          openComboModal={openComboModal}
        />
      ))}
    </Carousel>
  );
};

export default CarouselDesktop;
