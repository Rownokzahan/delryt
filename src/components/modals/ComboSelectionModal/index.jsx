"use client";

import Modal from "../Modal";
import SelectionCard from "./cards/SelectionCard";
import ItemCard from "./cards/ItemCard";
import useComboSelection from "@/hooks/useComboSelection";
import StepDisplay from "./StepDisplay";
import StepCompletionButton from "./StepCompletionButton";

const ComboSelectionModal = ({ isModalOpen, closeModal }) => {
  const {
    comboItems,
    currentStep,
    handleCurrentStep,
    selectedItems,
    handleSelectItem,
  } = useComboSelection();

  return (
    <Modal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      closeOnOutsideClick={true}
      disableScroll={true}
    >
      <div className="p-4 pt-0">
        <h4 className="font-semibold text-lg">Free Coke with Lasagna</h4>
        <p className="text-sm">₹ {269}</p>
      </div>

      <div className="p-4 bg-gray-200 grid grid-cols-2 gap-2">
        <ItemCard
          label="Item 1"
          item={selectedItems?.item1}
          isSkeleton={selectedItems?.item1 === null}
          onClick={() => handleCurrentStep(1)}
        />

        <ItemCard
          label="Item 2"
          item={selectedItems?.item2}
          isSkeleton={selectedItems?.item2 === null}
        />
      </div>

      <div className="p-4 bg-white space-y-4">
        <StepDisplay currentStep={currentStep} />

        <div className="border-t divide-y">
          {comboItems?.map((item) => (
            <SelectionCard
              key={item?.id}
              item={item}
              selectedItems={selectedItems}
              currentStep={currentStep}
              handleSelectItem={handleSelectItem}
            />
          ))}
        </div>

        <StepCompletionButton
          currentStep={currentStep}
          handleCurrentStep={handleCurrentStep}
          selectedItems={selectedItems}
        />
      </div>
    </Modal>
  );
};

export default ComboSelectionModal;
