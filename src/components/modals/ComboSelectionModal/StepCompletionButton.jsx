const StepCompletionButton = ({
  currentStep,
  handleCurrentStep,
  selectedItems,
}) => {
  const isDisabled =
    currentStep === 1
      ? selectedItems?.item1 === null
      : selectedItems?.item2 === null;

  const buttonText = currentStep === 1 ? "Select Next Item" : "Confirm Combo";

  return (
    <button
      onClick={() => currentStep === 1 && handleCurrentStep(2)}
      className="w-full p-4 text-end font-semibold text-white bg-primary disabled:bg-gray-300"
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default StepCompletionButton;
