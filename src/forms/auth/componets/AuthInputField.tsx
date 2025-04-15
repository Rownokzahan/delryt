import clsx from "clsx";
import { FieldError } from "react-hook-form";
import { BsExclamationCircle } from "react-icons/bs";

interface AuthInputFieldProps {
  id: string;
  type?: string;
  registerProps: object;
  placeholder: string;
  error?: FieldError;
  isPasswordField?: boolean;
}

const AuthInputField = ({
  id,
  type,
  registerProps,
  placeholder,
  error,
  isPasswordField = false,
}: AuthInputFieldProps) => {
  return (
    <div className="space-y-1">
      <input
        id={id}
        type={type}
        {...registerProps}
        placeholder={placeholder}
        className={clsx(
          "w-full py-2 pl-3",
          isPasswordField ? "pr-9" : "pr-3",
          "rounded-lg outline-0 border focus:border-primary font-medium placeholder:font-normal"
        )}
      />

      {error && (
        <p className="ms-1 text-xs text-primary/90 flex gap-1 items-center">
          <BsExclamationCircle className="-mt-[1px]" />
          <span>{error.message}</span>
        </p>
      )}
    </div>
  );
};

export default AuthInputField;
