import AuthInputField from "./AuthInputField";
import { FieldError, UseFormRegister } from "react-hook-form";

interface PasswordFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
}

const PasswordField = ({ register, error }: PasswordFieldProps) => {
  return (
    <AuthInputField
      label="Password"
      id="password"
      type="password"
      registerProps={{
        ...register("password", {
          required: { value: true, message: "Password is required." },
        }),
      }}
      placeholder="Password"
      error={error}
    />
  );
};

export default PasswordField;
