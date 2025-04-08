"use client";

import BannersSkeleton from "./BannersSkeleton";
import Carousel from "@/components/Carousel";
import BannerCard from "@/cards/BannerCard";
import { useGetBannersQuery } from "@/store/banner/bannerApi";

const Banners = () => {
  const { data: banners = [], isLoading, error } = useGetBannersQuery();

  if (isLoading) {
    return <BannersSkeleton />;
  }

  if (error) {
    console.error("Failed to fetch banners:", error);
  }

  return (
    <section className="ui-container py-2 md:py-6 overflow-hidden">
      <Carousel containerClasses="-mx-3">
        {banners.map((banner) => (
          <BannerCard key={banner.id} banner={banner} />
        ))}
      </Carousel>
    </section>
  );
};

export default Banners;
