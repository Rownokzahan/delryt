"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../componets/AuthInputField";
import EmailField from "../componets/EmailField";
import PasswordField from "../componets/PasswordField";
import { useRegisterMutation } from "@/store/features/auth/authApi";
import { useSearchParams } from "next/navigation";
import AuthAlert from "../componets/AuthAlert";
import useModalById from "@/hooks/useModalById";
import FormSubmitButton from "@/forms/components/FormSubmitButton";
import { useRouter } from "next/navigation";

interface Inputs {
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [signup, { isLoading, isError, isSuccess, error }] =
    useRegisterMutation();
  const { closeModal } = useModalById("authModal");

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") ?? "/";
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (newUser) => {
    signup(newUser)
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
        message="Successfully resgisterd"
        status="success"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInputField
          id="f_name"
          type="text"
          registerProps={{
            ...register("f_name", {
              required: { value: true, message: "First Name is required." },
            }),
          }}
          placeholder="First Name"
          error={errors.f_name}
        />

        <AuthInputField
          id="l_name"
          type="text"
          registerProps={{
            ...register("l_name", {
              required: { value: true, message: "Last Name is required." },
            }),
          }}
          placeholder="Last Name"
          error={errors.l_name}
        />

        <EmailField register={register} error={errors.email} />

        <AuthInputField
          id="phone"
          type="text"
          registerProps={{
            ...register("phone", {
              required: { value: true, message: "Phone is required." },
              minLength: {
                value: 6,
                message: "Phone number must be at least 6 characters.",
              },
              maxLength: {
                value: 20,
                message: "Phone number must be at most 20 characters.",
              },
            }),
          }}
          placeholder="Phone"
          error={errors.phone}
        />

        <PasswordField
          register={register}
          error={errors.password}
          checkMinLength={true}
        />

        <FormSubmitButton
          className="mt-6"
          isSubmitting={isLoading}
          label="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignupForm;
