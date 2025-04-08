"use client";

import Button from "@/components/ui/Button";
import useModalById from "@/hooks/useModalById";
import clsx from "clsx";
import { useState } from "react";
import { IoRadioButtonOffSharp, IoRadioButtonOn } from "react-icons/io5";
import Modal from "../Modal";

const sortItems = ["Price", "Spice", "Rating"];
const options = ["High To Low", "Low To High"];
type SortOption = "High To Low" | "Low To High" | null;

const initialSortingOptions: Record<string, SortOption> = {
  Price: null,
  Spice: null,
  Rating: null,
};

const SortModal = () => {
  const { closeModal } = useModalById("sortModal");

  const [activeSortItem, setActiveSortItem] = useState<string>("Price");

  const [sortingOptions, setSortingOptions] = useState<
    Record<string, SortOption>
  >(initialSortingOptions);

  const clearSelections = () => {
    setActiveSortItem("Price");
    setSortingOptions(initialSortingOptions); // Reset to initial values
  };

  const handleSortItemChange = (sortItem: string) => {
    setActiveSortItem(sortItem);
  };

  const handleOptionSelect = (option: SortOption) => {
    setSortingOptions((prevState) => ({
      ...prevState,
      [activeSortItem]: option,
    }));
  };

  const isOptionSelected = (option: SortOption) =>
    sortingOptions[activeSortItem] === option;

  const handleApply = () => {
    closeModal();
  };

  return (
    <Modal modalId={"sortModal"} fullHeightOnSmall={false}>
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="text-xl font-medium">Sort</h3>
      </div>

      {/* Main Content */}
      <div className="min-h-52 flex overflow-y-auto">
        {/* Sort Items List */}
        <div className="w-1/3 bg-gray-100 flex flex-col">
          {sortItems.map((item) => (
            <button
              key={item}
              className={clsx(
                "p-4 border-s-4 text-left font-medium hover:bg-gray-200 duration-150",
                activeSortItem === item
                  ? "border-primary"
                  : "border-transparent"
              )}
              onClick={() => handleSortItemChange(item)}
              aria-pressed={activeSortItem === item}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Sorting Options */}
        <div className="p-4 flex-1">
          <div className="grid gap-2">
            {options.map((option) => (
              <button
                key={option}
                className="p-2 flex items-center gap-2 text-left text-uiBlack-light"
                onClick={() => handleOptionSelect(option as SortOption)}
                aria-pressed={isOptionSelected(option as SortOption)}
              >
                <span className="text-xl">
                  {isOptionSelected(option as SortOption) ? (
                    <IoRadioButtonOn className="text-primary" />
                  ) : (
                    <IoRadioButtonOffSharp />
                  )}
                </span>
                <span className="capitalize">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t flex justify-end gap-4 text-lg">
        <button
          className="font-medium py-3 px-8"
          onClick={clearSelections}
          aria-label="Clear all selections"
        >
          Clear
        </button>

        <Button variant="primary" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </Modal>
  );
};

export default SortModal;
