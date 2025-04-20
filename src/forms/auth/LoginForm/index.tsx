"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import PasswordField from "../componets/PasswordField";
import AuthInputField from "../componets/AuthInputField";
import { useLoginMutation } from "@/store/auth/authApi";
import { getType, isEmail, isPhone } from "./utils";
import AuthSubmitButton from "../componets/AuthSubmitButton";
import AuthAlert from "../componets/AuthAlert";
import { redirect } from "next/navigation";
import useReturnToPath from "@/hooks/useReturnToPath";
import useModalById from "@/hooks/useModalById";

interface Inputs {
  email_or_phone: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();
  const { returnToPath } = useReturnToPath();
  const { closeModal } = useModalById("authModal");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email_or_phone, password } = data;

    const type = getType(email_or_phone);
    if (type === undefined) {
      console.error("Invalid email or phone number");
      return;
    }

    const loginData = { email_or_phone, password, type };

    login(loginData)
      .unwrap()
      .then(() => {
        reset();
        closeModal();
        redirect(returnToPath);
      });
  };

  return (
    <div className="space-y-4">
      <AuthAlert isVisible={isError} message={error as string} status="error" />
      <AuthAlert
        isVisible={isSuccess}
        message="Successfully logged in"
        status="success"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInputField
          id="email_or_phone"
          type="text"
          registerProps={{
            ...register("email_or_phone", {
              required: "Email or phone number is required.",
              validate: (value) => {
                if (isEmail(value) || isPhone(value)) {
                  return true;
                }
                return "Invalid email or phone number.";
              },
            }),
          }}
          placeholder="Email or phone number"
          error={errors.email_or_phone}
        />

        <PasswordField register={register} error={errors.password} />

        <AuthSubmitButton isLoading={isLoading} label="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
