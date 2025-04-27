import clsx from "clsx";
import { FieldError } from "react-hook-form";
import { BsExclamationCircle } from "react-icons/bs";

interface ProfileInputFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  isOptional?: boolean;
  registerProps: object;
  fieldError: FieldError | undefined;
  isPasswordField?: boolean;
}

const ProfileInputField = ({
  id,
  label,
  type = "text",
  isOptional = false,
  registerProps,
  fieldError,
  isPasswordField = false,
}: ProfileInputFieldProps) => {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-xs text-uiBlack-light">
        <span>{label}</span> {isOptional && <span>(Optional)</span>}
      </label>

      <div className="relative space-y-[2px]">
        <input
          type={type}
          id={id}
          placeholder={label}
          {...registerProps}
          className={clsx(
            "w-full p-2 rounded-sm border outline-0",
            "focus:border-primary",
            "font-medium text-uiBlack text-sm",
            "placeholder-uiBlack-light/50 placeholder:font-normal",
            isPasswordField && "pe-9"
          )}
        />

        {fieldError && (
          <p className="ms-1 text-xs text-primary/90 flex gap-1 items-center">
            <BsExclamationCircle className="text-[10px]" />
            <span>{fieldError.message}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileInputField;
