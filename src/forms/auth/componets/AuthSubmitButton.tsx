import Button from "@/components/ui/Button";
import { ImSpinner8 } from "react-icons/im";

interface AuthSubmitButtonProps {
  isLoading: boolean;
  label: string;
}

const AuthSubmitButton = ({ isLoading, label }: AuthSubmitButtonProps) => {
  return (
    <div className="mt-6">
      {isLoading ? (
        <Button type="button" className="h-12 w-full">
          <ImSpinner8 className="animate-spin text-lg" />
        </Button>
      ) : (
        <Button type="submit" className="h-12 w-full">
          {label}
        </Button>
      )}
    </div>
  );
};

export default AuthSubmitButton;
