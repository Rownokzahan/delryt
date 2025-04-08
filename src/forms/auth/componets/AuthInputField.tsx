import { FieldError } from "react-hook-form";
import { BsExclamationCircleFill } from "react-icons/bs";

interface AuthInputFieldProps {
  label: string;
  id: string;
  type?: string;
  registerProps: object;
  placeholder: string;
  error?: FieldError;
}

const AuthInputField = ({
  label,
  id,
  type,
  registerProps,
  placeholder,
  error,
}: AuthInputFieldProps) => {
  return (
    <div className="mb-4 space-y-2">
      <label htmlFor="email">{label}</label>

      <div className="space-y-1">
        <input
          id={id}
          type={type}
          {...registerProps}
          placeholder={placeholder}
          className="w-full p-3 rounded-xl border focus:border-primary outline-0 font-medium placeholder:font-normal"
        />

        {error && (
          <p className="ms-1 text-sm text-primary/90 flex gap-1 items-center">
            <BsExclamationCircleFill className="-mt-[1px]" />
            <span>{error.message}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthInputField;
