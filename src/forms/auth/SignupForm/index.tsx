import Button from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../componets/AuthInputField";
import EmailField from "../componets/EmailField";
import PasswordField from "../componets/PasswordField";

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
  } = useForm<Inputs>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
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

      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
