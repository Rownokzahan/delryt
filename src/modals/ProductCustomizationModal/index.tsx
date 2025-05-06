"use client";

import useModalById from "@/hooks/useModalById";
import Modal from "../Modal";
import AddOnList from "./components/AddOnList";
import ProductCustomizationProvider from "./ProductCustomizationProvider";
import ProductCustomizationHeader from "./components/ProductCustomizationHeader";
import ProductCustomizationFooter from "./components/ProductCustomizationFooter";

const ProductCustomizationModal = () => {
  const { modalData, isModalOpen } = useModalById("productCustomizationModal");

  if (!isModalOpen) {
    return null;
  }

  if (!modalData) {
    console.warn("Modal data is missing in ProductCustomizationModal.", {
      modalData,
    });

    return null;
  }

  return (
    <ProductCustomizationProvider
      product={modalData.product}
      selectedAddOns={modalData.mode === "edit" ? modalData.selectedAddOns : []}
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
