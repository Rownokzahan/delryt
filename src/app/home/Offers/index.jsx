import Carousel from "@/components/carousels/Carousel";
import offers from "./offersData";
import Image from "next/image";

const Offers = () => {
  return (
    <div className="md:ui-container md:px-2 py-2 md:py-6">
      <Carousel>
        {offers.map((offer, index) => (
          <div key={index} className="px-3 cursor-pointer">
            <Image
              width={464}
              height={232}
              src={offer.image_url}
              alt={`Offer ${index + 1}`}
              className="rounded-xl hover:scale-[0.98] duration-300"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Offers;
