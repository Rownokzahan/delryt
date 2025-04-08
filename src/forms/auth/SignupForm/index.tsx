import Button from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../componets/AuthInputField";
import EmailField from "../componets/EmailField";
import PasswordField from "../componets/PasswordField";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <AuthInputField
        label="Name"
        id="name"
        type="text"
        registerProps={{
          ...register("name", {
            required: { value: true, message: "Name is required." },
          }),
        }}
        placeholder="What should we call you?"
        error={errors.name}
      />

      <EmailField register={register} error={errors.email} />
      <PasswordField register={register} error={errors.password} />

      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
