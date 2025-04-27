import Button from "@/components/ui/Button";
import { CgSpinner } from "react-icons/cg";

interface SubmitButtonProps {
  label: string;
  isSubmitting: boolean;
  isFormValid: boolean;
}

const SubmitButton = ({
  label,
  isSubmitting,
  isFormValid,
}: SubmitButtonProps) => {
  return (
    <div className="px-3 py-2 shadow-md">
      {isSubmitting ? (
        <Button type="button" className="w-full">
          <CgSpinner className="animate-spin text-2xl" />
        </Button>
      ) : (
        <Button disabled={!isFormValid} type="submit" className="w-full">
          {label}
        </Button>
      )}
    </div>
  );
};

export default SubmitButton;
