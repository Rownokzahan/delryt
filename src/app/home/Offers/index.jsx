"use client";

import Carousel from "@/components/carousels/Carousel";
import OfferCard from "./OfferCard";
import OffersSkeleton from "./OffersSkeleton";
import useOffers from "@/hooks/useOffers";

const Offers = () => {
  const { data: offers, loading } = useOffers();

  if (loading) {
    return <OffersSkeleton />;
  }

  return (
    <div className="md:ui-container md:px-2 py-2 md:py-6">
      <Carousel>
        {offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </Carousel>
    </div>
  );
};

export default Offers;
