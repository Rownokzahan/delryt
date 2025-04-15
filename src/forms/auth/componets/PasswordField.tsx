"use client";

import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import AuthInputField from "./AuthInputField";
import { FieldError, UseFormRegister } from "react-hook-form";
import { useState } from "react";

interface PasswordFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
  checkMinLength?: boolean;
}

const PasswordField = ({ register, error }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <AuthInputField
        id="password"
        type={showPassword ? "text" : "password"}
        registerProps={register("password", {
          required: { value: true, message: "Password is required." },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters.",
          },
        })}
        placeholder="Password"
        error={error}
        isPasswordField={true}
      />

      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute top-3 right-3 text-lg"
      >
        {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
      </button>
    </div>
  );
};

export default PasswordField;
