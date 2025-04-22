"use client";

import useModalById from "@/hooks/useModalById";
import Modal from "../Modal";
import { Product } from "@/types";
import VariationList from "./components/VariationList";
import AddOnList from "./components/AddOnList";
import ProductCustomizationProvider from "./ProductCustomizationProvider";
import ProductCustomizationHeader from "./components/ProductCustomizationHeader";
import ProductCustomizationFooter from "./components/ProductCustomizationFooter";

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

  return (
    <ProductCustomizationProvider product={product}>
      <Modal modalId="productCustomizationModal">
        <ProductCustomizationHeader />

        <div className="h-[50dvh] sm:h-80 pb-3 space-y-3 overflow-y-auto hover-scrollbar">
          <VariationList />
          <AddOnList />
        </div>

        <ProductCustomizationFooter />
      </Modal>
    </ProductCustomizationProvider>
  );
};

export default ProductCustomizationModal;
