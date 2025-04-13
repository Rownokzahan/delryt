import { ViewState } from "@/modals/AuthModal";

interface ForgetPasswordLinkProps {
  handleViewSwitch: (targetView: ViewState) => void;
}

const ForgetPasswordLink = ({ handleViewSwitch }: ForgetPasswordLinkProps) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => handleViewSwitch("forgotPassword")}
        type="button"
        className="block mt-1 ml-auto text-primary underline underline-offset-2 text-sm"
      >
        Forgot Password?
      </button>
    </div>
  );
};

export default ForgetPasswordLink;
