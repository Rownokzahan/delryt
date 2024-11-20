"use client";

import useBrands from "@/hooks/useBrands";
import BrandIconCard from "./BrandIconCard";
import BrandIconsSkeleton from "./BrandIconsSkeleton";

const BrandIcons = () => {
  const { data: brands, loading } = useBrands();

  if (loading) {
    return <BrandIconsSkeleton />;
  }

  return (
    <div
      className="flex flex-shrink-0 overflow-x-auto gap-4 pb-1"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(192, 192, 201,0.4) transparent",
      }}
    >
      {brands?.map((brand) => (
        <BrandIconCard key={brand?.id} brand={brand} />
      ))}
    </div>
  );
};

export default BrandIcons;
