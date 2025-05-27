"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import PasswordField from "../componets/PasswordField";
import AuthInputField from "../componets/AuthInputField";
import { useLoginMutation } from "@/store/features/auth/authApi";
import { getType, isEmail, isPhone } from "./utils";
import AuthAlert from "../componets/AuthAlert";
import { useRouter, useSearchParams } from "next/navigation";
import useModalById from "@/hooks/useModalById";
import FormSubmitButton from "@/forms/components/FormSubmitButton";

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
  const { closeModal } = useModalById("authModal");

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/";
  const router = useRouter();

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
        router.push(redirectTo);
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

        <FormSubmitButton
          className="mt-6"
          isSubmitting={isLoading}
          label="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
