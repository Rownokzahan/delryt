"use client";

import Modal from "../Modal";
import Header from "./Header";
import Footer from "./Footer";
import VerticalTabs from "./VerticalTabs";
import addOns, { AddOnItemType } from "./addOnsData";
import AddOnCategory from "./AddOnCategory";
import { useRef, useState } from "react";
import { Id } from "@/types";

const CustomizationModal = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<{
    [key: Id]: AddOnItemType[]; // category_id : item[]
  }>({});

  const categoryRefs = useRef(new Map());

  const updateSelectedAddOns = (categoryId: Id, addOnItem: AddOnItemType) => {
    setSelectedAddOns((prevAddOns) => {
      const itemsInCategory = prevAddOns[categoryId] || [];

      const isSelected = itemsInCategory.find(
        (item) => item.id == addOnItem.id
      );

      // Toggle the item's selection state within its category
      const updatedItems = isSelected
        ? itemsInCategory.filter((item) => item.id !== addOnItem.id) // Remove item
        : [...itemsInCategory, addOnItem]; // Add item

      return { ...prevAddOns, [categoryId]: updatedItems };
    });
  };

  const resetSelectedAddOns = () => {
    setSelectedAddOns({});
  };

  return (
    <Modal modalId="customizationModal" containerClasses="">
      <Header resetSelectedAddOns={resetSelectedAddOns} />

      <div className="flex h-[50dvh] sm:h-96">
        {/* List of add-on categories */}
        <div className="flex-1  overflow-y-auto space-y-5 py-4 hover-scrollbar">
          {addOns.map((category) => (
            <AddOnCategory
              key={category.id}
              category={category}
              categoryRefs={categoryRefs}
              selectedAddOns={selectedAddOns}
              updateSelectedAddOns={updateSelectedAddOns}
            />
          ))}
        </div>

        {/* Vertical tabs for quick navigation */}
        <VerticalTabs addOns={addOns} categoryRefs={categoryRefs} />
      </div>

      <Footer
        selectedAddOns={selectedAddOns}
        resetSelectedAddOns={resetSelectedAddOns}
      />
    </Modal>
  );
};

export default CustomizationModal;
