"use client";

import Button from "@/components/ui/Button";
import Modal from "../Modal";
import { IoRadioButtonOffSharp, IoRadioButtonOn } from "react-icons/io5";
import { useState } from "react";

const options = [
  "Show for 7 days",
  "Show for 21 days",
  "Show for 30 days",
  "Show for 3 months",
  "Show for 6 months",
];

const DateSortModal = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const clearSelection = () => {
    setSelectedOption("");
  };

  const handleApply = () => {
    console.log(selectedOption);
  };

  return (
    <Modal modalId="dateSortModal">
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="text-xl font-medium">Sort</h3>
      </div>

      {/* Main Content */}
      <div className="flex overflow-y-auto">
        <div className="w-1/3 bg-gray-100 flex flex-col">
          <button className="p-4 border-s-4 border-primary text-left font-medium hover:bg-gray-200 duration-150">
            Date Wise
          </button>
        </div>

        {/* Sorting Options */}
        <div className="p-4 flex-1">
          <div className="grid gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="p-2 flex items-center gap-2 text-left text-uiBlack-light"
              >
                <span className="text-xl">
                  {selectedOption === option ? (
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
          onClick={clearSelection}
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

export default DateSortModal;
