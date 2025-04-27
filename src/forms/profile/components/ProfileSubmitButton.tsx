import Button from "@/components/ui/Button";
import { CgSpinner } from "react-icons/cg";

interface ProfileSubmitButtonProps {
  label: string;
  isSubmitting: boolean;
}

const ProfileSubmitButton = ({
  label,
  isSubmitting,
}: ProfileSubmitButtonProps) => {
  return (
    <div className="px-3 py-2 shadow-md">
      {isSubmitting ? (
        <Button type="button" className="w-full">
          <CgSpinner className="animate-spin text-2xl" />
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          {label}
        </Button>
      )}
    </div>
  );
};

export default ProfileSubmitButton;
