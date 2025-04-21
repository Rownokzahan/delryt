"use client";

import useModalById from "@/hooks/useModalById";
import Modal from "../Modal";
import { Product } from "@/types";
import VegNonVegIcon from "@/components/ui/VegNonVegIcon";
import VariationList from "./components/VariationList";
import AddOnList from "./components/AddOnList";

const ProductCustomizationModal = () => {
  const { modalData, isModalOpen } = useModalById("productCustomizationModal");

  if (!isModalOpen) {
    return null;
  }

  const product = (modalData as { product: Product | undefined })?.product;

  if (!product) {
    console.warn("Product data is missing in ProductCustomizationModal.", {
      modalData,
    });

    return null;
  }

  const { name, product_type, price, variations, add_ons } = product;
  const isVeg = product_type === "veg";

  return (
    <Modal modalId="productCustomizationModal">
      <div className="p-4 border-b flex justify-between items-center gap-6">
        <h4 className="truncate">
          <VegNonVegIcon isVeg={isVeg} className="me-1 mb-1" />
          <span className="font-medium">{name}</span>
        </h4>

        <button
          onClick={() => {}}
          className="py-1 font-medium text-primary text-sm text-nowrap"
        >
          Reset Customization
        </button>
      </div>

      <div className="h-[50dvh] sm:h-80 pb-3 space-y-3 overflow-y-auto hover-scrollbar">
        <VariationList variations={variations} />
        <AddOnList addOns={add_ons} />
      </div>

      <div className="sticky bottom-0">
        <button
          onClick={() => {}}
          className="w-full p-4 bg-primary font-medium text-white flex items-center justify-between"
        >
          <p>₹ {price}</p>
          <p>Add Item</p>
        </button>
      </div>
    </Modal>
  );
};

export default ProductCustomizationModal;
