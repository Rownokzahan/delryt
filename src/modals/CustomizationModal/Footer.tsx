import { Id } from "@/types";
import { useState } from "react";
import { AddOnItemType } from "./addOnsData";
import clsx from "clsx";
import useModalById from "@/hooks/useModalById";

interface FooterProps {
  selectedAddOns: { [key: Id]: AddOnItemType[] };
  resetSelectedAddOns: () => void;
}

const Footer = ({ selectedAddOns, resetSelectedAddOns }: FooterProps) => {
  const { closeModal } = useModalById("customizationModal");

  const [showAllAddOns, setShowAllAddOns] = useState<boolean>(false);

  let totalAddOns = 0;
  let totalPrice = 0;
  const addOnNamesArray: string[] = [];

  // Loop through selected add-ons
  for (const itemsArray of Object.values(selectedAddOns)) {
    totalAddOns += itemsArray.length;
    for (const item of itemsArray) {
      totalPrice += item.price;
      addOnNamesArray.push(item.name);
    }
  }

  const handleAddItem = () => {
    resetSelectedAddOns();
    closeModal();
  };

  return (
    <div className="sticky bottom-0">
      {addOnNamesArray.length !== 0 && (
        <div className="px-4 py-3 text-sm text-uiBlack-light flex items-center justify-between gap-2">
          <p className={clsx(!showAllAddOns && "truncate")}>
            {addOnNamesArray.join(", ")}
          </p>

          {/* Show "+X Add on" button if more than 2 add-ons */}
          {!showAllAddOns && addOnNamesArray.length > 2 && (
            <button
              onClick={() => setShowAllAddOns(true)}
              className="font-medium whitespace-nowrap"
            >
              +{addOnNamesArray.length - 2} Add on
            </button>
          )}
        </div>
      )}

      {/* Add item Button */}
      <button
        onClick={handleAddItem}
        className="w-full p-4 bg-primary font-medium text-white flex items-center justify-between"
      >
        <p className="flex items-center gap-2">
          <span>
            {totalAddOns} add-on{totalAddOns > 1 && "s"}
          </span>
          <span className="ps-2 border-s leading-4">₹ {totalPrice + 245}</span>
        </p>

        <p>Add Item</p>
      </button>
    </div>
  );
};

export default Footer;
