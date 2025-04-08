import Button from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailField from "../componets/EmailField";

interface Inputs {
  email: string;
}

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailField register={register} error={errors.email} />

      <Button type="submit" className="w-full mt-6">
        Send Reset Link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
