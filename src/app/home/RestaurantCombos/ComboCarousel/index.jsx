"use client";

import useRestaurantCombos from "@/hooks/useRestaurantCombos";
import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";
import CarouselSkeleton from "./CarouselSkeleton";
import ComboSelectionModal from "@/components/modals/ComboSelectionModal";
import { useState } from "react";

const ComboCarousel = () => {
  const [isComboModalOpen, setIsComboModalOpen] = useState(true);
  const { data: combos = [], loading } = useRestaurantCombos();

  if (loading) {
    return <CarouselSkeleton />;
  }

  const openComboModal = () => setIsComboModalOpen(true);
  const closeComboModal = () => setIsComboModalOpen(false);

  return (
    <>
      <div className="hidden sm:block">
        <CarouselDesktop combos={combos} openComboModal={openComboModal} />
      </div>

      <div className="sm:hidden">
        <CarouselMobile combos={combos} openComboModal={openComboModal} />
      </div>

      <ComboSelectionModal
        isModalOpen={isComboModalOpen}
        closeModal={closeComboModal}
      />
    </>
  );
};

export default ComboCarousel;
