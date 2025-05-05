"use client";

import useModalById from "@/hooks/useModalById";
import Modal from "../Modal";
import { Product, SelectedAddOnItem } from "@/types";
import AddOnList from "./components/AddOnList";
import ProductCustomizationProvider from "./ProductCustomizationProvider";
import ProductCustomizationHeader from "./components/ProductCustomizationHeader";
import ProductCustomizationFooter from "./components/ProductCustomizationFooter";

const ProductCustomizationModal = () => {
  const { modalData, isModalOpen } = useModalById("productCustomizationModal");

  if (!isModalOpen) {
    return null;
  }

  const { product, selectedAddOns } = modalData as {
    product: Product | undefined;
    selectedAddOns: SelectedAddOnItem[] | undefined;
  };

  if (!product || !selectedAddOns) {
    console.warn(
      "Product or selectedAddOns data is missing in ProductCustomizationModal.",
      {
        modalData,
      }
    );

    return null;
  }

  return (
    <ProductCustomizationProvider
      product={product}
      prevSelectedAddOns={selectedAddOns}
    >
      <Modal modalId="productCustomizationModal">
        <ProductCustomizationHeader />

        <div className="h-[50dvh] sm:h-80 pb-3 space-y-3 overflow-y-auto hover-scrollbar">
          <AddOnList />
        </div>

        <ProductCustomizationFooter />
      </Modal>
    </ProductCustomizationProvider>
  );
};

export default ProductCustomizationModal;
