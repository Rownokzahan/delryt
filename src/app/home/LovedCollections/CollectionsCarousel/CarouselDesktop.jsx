import Carousel from "@/components/carousels/Carousel";
import CollectionCard from "../CollectionCard";

const CarouselDesktop = ({collections}) => {
  return (
    <>
      <Carousel>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselDesktop;