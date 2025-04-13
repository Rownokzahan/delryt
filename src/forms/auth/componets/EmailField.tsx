import { FieldError, UseFormRegister } from "react-hook-form";
import AuthInputField from "./AuthInputField";

interface EmailFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
}

const EmailField = ({ register, error }: EmailFieldProps) => {
  return (
    <AuthInputField
      id="email"
      type="email"
      registerProps={{
        ...register("email", {
          required: { value: true, message: "Email is required." },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address.",
          },
          validate: (value) => {
            if (value.length < 10) {
              return "Email must be at least 10 characters.";
            }
            return true;
          },
        }),
      }}
      placeholder="Email"
      error={error}
    />
  );
};

export default EmailField;
