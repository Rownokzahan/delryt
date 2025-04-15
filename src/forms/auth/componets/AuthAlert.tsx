import clsx from "clsx";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";

interface AuthAlertProps {
  status: "success" | "error";
  message: string;
  isVisible?: boolean;
}

const AuthAlert = ({ status, message, isVisible = false }: AuthAlertProps) => {
  if (!isVisible) return null;

  const Icon = status === "success" ? FaCircleCheck : FaCircleExclamation;

  return (
    <div
      className={clsx(
        "px-3 py-2 text-sm flex gap-1",
        status === "success"
          ? "bg-success/15 text-success"
          : "bg-primary/15 text-primary"
      )}
    >
      <Icon className="shrink-0 text-base mt-[2px]" />
      <p>{message}</p>
    </div>
  );
};

export default AuthAlert;
