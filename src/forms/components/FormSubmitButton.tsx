import Button from "@/components/ui/Button";
import { CgSpinner } from "react-icons/cg";

interface FormSubmitButtonProps {
  label: string;
  isSubmitting: boolean;
  className: string;
}

const FormSubmitButton = ({
  label,
  isSubmitting,
  className,
}: FormSubmitButtonProps) => {
  return (
    <div className={className}>
      {isSubmitting ? (
        <Button type="button" className="w-full h-12">
          <CgSpinner className="animate-spin text-2xl" />
        </Button>
      ) : (
        <Button type="submit" className="w-full h-12">
          {label}
        </Button>
      )}
    </div>
  );
};

export default FormSubmitButton;
