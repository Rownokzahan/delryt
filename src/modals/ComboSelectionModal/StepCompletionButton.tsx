import { SelectedItems } from "./types";

interface StepCompletionButtonProps {
  currentStep: number;
  selectedItems: SelectedItems;
  proceedToNextStep: () => void;
}

const StepCompletionButton = ({
  currentStep,
  selectedItems,
  proceedToNextStep,
}: StepCompletionButtonProps) => {
  const isDisabled =
    (currentStep === 1 && selectedItems?.item1 === null) ||
    (currentStep === 2 && selectedItems?.item2 === null);

  const buttonText = currentStep === 1 ? "Select Next Item" : "Confirm Combo";

  return (
    <div className="sm:p-4 sticky bottom-0">
      <button
        onClick={proceedToNextStep}
        className="w-full p-4 text-end font-semibold text-uiWhite bg-primary disabled:bg-gray-300"
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default StepCompletionButton;
