import clsx from "clsx";

interface StepDisplayProps {
  currentStep: number;
}

const StepDisplay = ({ currentStep }: StepDisplayProps) => {
  return (
    <div className="p-4 flex items-center gap-2">
      <div
        className={clsx(
          "size-10 flex items-center justify-center border-4 rounded-full",
          currentStep == 1 && "border-e-primary border-t-primary rotate-45",
          currentStep == 2 && "border-primary"
        )}
      >
        <span
          className={clsx(
            "text-primary font-bold",
            currentStep == 1 && "-rotate-45"
          )}
        >
          {currentStep}/2
        </span>
      </div>
      <h5 className="font-semibold">Select Item {currentStep}</h5>
    </div>
  );
};

export default StepDisplay;
