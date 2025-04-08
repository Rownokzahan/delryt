"use client";

import Modal from "../Modal";
import SelectionCard from "./cards/SelectionCard";
import ItemCard from "./cards/ItemCard";
import StepDisplay from "./StepDisplay";
import StepCompletionButton from "./StepCompletionButton";
import { useState } from "react";
import comboItems from "./comboItems";
import { ComboItem, SelectedItems, Step } from "./types";
import useModalById from "@/hooks/useModalById";

const INITIAL_STEP: Step = 1; // Initial step value
const INITIAL_SELECTIONS: SelectedItems = { item1: null, item2: null }; // Initial selected items state

const ComboSelectionModal = () => {
  const { closeModal } = useModalById("comboSelectionModal");

  const [currentStep, setCurrentStep] = useState<Step>(INITIAL_STEP); // Track the current step
  const [selectedItems, setSelectedItems] =
    useState<SelectedItems>(INITIAL_SELECTIONS); // Track selected items

  const closeAndResetModal = () => {
    closeModal();
    setCurrentStep(INITIAL_STEP);
    setSelectedItems(INITIAL_SELECTIONS);
  };

  const updateSelectedItems = (item: ComboItem) => {
    setSelectedItems((prev) => {
      return {
        ...prev,
        ...(currentStep === 1 && { item1: item }),
        ...(currentStep === 2 && { item2: item }),
      };
    });
  };

  const proceedToNextStep = () => {
    if (currentStep === 1 && selectedItems.item1 !== null) {
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2 && selectedItems.item2 !== null) {
      console.log(selectedItems);
      closeAndResetModal();
    }
  };

  return (
    <Modal modalId="comboSelectionModal">
      <div className="px-4 py-2 text-uiBlack-light">
        <h4 className="font-semibold text-lg">Free Coke with Lasagna</h4>
        <p className="text-sm">₹ {269}</p>
      </div>

      <div className="p-4 bg-gray-200 grid grid-cols-2 gap-2">
        <ItemCard
          label="Item 1"
          item={selectedItems?.item1}
          onClick={() => setCurrentStep(1)}
        />

        <ItemCard label="Item 2" item={selectedItems?.item2} />
      </div>

      <StepDisplay currentStep={currentStep} />

      <div className="h-[20dvh] sm:h-[30dvh] overflow-y-auto custom-scrollbar">
        <div className="px-4">
          {comboItems?.map((item) => (
            <SelectionCard
              key={item?.id}
              item={item}
              selectedItems={selectedItems}
              currentStep={currentStep}
              updateSelectedItems={updateSelectedItems}
            />
          ))}
        </div>
      </div>

      <StepCompletionButton
        currentStep={currentStep}
        proceedToNextStep={proceedToNextStep}
        selectedItems={selectedItems}
      />
    </Modal>
  );
};

export default ComboSelectionModal;
