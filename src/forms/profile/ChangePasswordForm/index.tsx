import { SubmitHandler, useForm } from "react-hook-form";
import ProfileInputField from "../components/ProfileInputField";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import FormSubmitButton from "@/forms/components/FormSubmitButton";

interface FormInputs {
  password: string;
  confirmPassword: string;
}

interface ChangePasswordFormProps {
  onSubmit: (password: string) => void;
  isSubmitting: boolean;
}

const ChangePasswordForm = ({
  onSubmit,
  isSubmitting,
}: ChangePasswordFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInputs>({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordValue = watch("password");

  const handleFinalSubmit: SubmitHandler<FormInputs> = (data) => {
    onSubmit(data.password);
  };

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)}>
      <div className="p-3 sm:px-8 sm:py-4 bg-gray-100 max-h-[70vh] overflow-y-auto space-y-3">
        <div className="relative">
          <ProfileInputField
            id="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            registerProps={register("password", {
              required: { value: true, message: "Password is required." },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
            isPasswordField={true}
            fieldError={errors.password}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-9 right-3"
          >
            {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
          </button>
        </div>

        <div className="relative">
          <ProfileInputField
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            registerProps={register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required.",
              },
              validate: (value) => {
                if (value !== passwordValue) {
                  return "Passwords do not match";
                }
                return true;
              },
            })}
            fieldError={errors.confirmPassword}
          />
        </div>
      </div>

      {/* Submit Button */}
      <FormSubmitButton
        className="px-3 py-2 shadow-md"
        isSubmitting={isSubmitting}
        label="Change Password"
      />
    </form>
  );
};

export default ChangePasswordForm;
