"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import PasswordField from "../componets/PasswordField";
import AuthInputField from "../componets/AuthInputField";
import { useLoginMutation } from "@/store/auth/authApi";
import { getType, isEmail, isPhone } from "./utils";
import AuthSubmitButton from "../componets/AuthSubmitButton";
import { FaCircleExclamation } from "react-icons/fa6";

interface Inputs {
  email_or_phone: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email_or_phone, password } = data;

    const type = getType(email_or_phone);
    if (!type) {
      console.error("Invalid email or phone number");
      return;
    }

    const loginData = { email_or_phone, password, type };

    login(loginData)
      .unwrap()
      .then((res) => {
        console.log(res.token);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {error && (
        <div className="mb-4 px-3 py-2 bg-red-100 text-sm flex items-center text-primary gap-1">
          <FaCircleExclamation className="text-base" /> Invalid email or
          password
        </div>
      )}

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
    </>
  );
};

export default LoginForm;
