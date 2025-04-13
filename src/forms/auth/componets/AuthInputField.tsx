import { FieldError } from "react-hook-form";
import { BsExclamationCircle } from "react-icons/bs";

interface AuthInputFieldProps {
  id: string;
  type?: string;
  registerProps: object;
  placeholder: string;
  error?: FieldError;
}

const AuthInputField = ({
  id,
  type,
  registerProps,
  placeholder,
  error,
}: AuthInputFieldProps) => {
  return (
    <div className="space-y-1">
      <input
        id={id}
        type={type}
        {...registerProps}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border focus:border-primary outline-0 font-medium placeholder:font-normal"
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
