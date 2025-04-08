import { ViewState } from "@/modals/AuthModal";
import Button from "@/components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import EmailField from "../componets/EmailField";
import PasswordField from "../componets/PasswordField";

interface Inputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormProps {
  handleViewSwitch: (targetView: ViewState) => void;
}

const LoginForm = ({ handleViewSwitch }: LoginFormProps) => {
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
      <PasswordField register={register} error={errors.password} />

      <div className="flex items-center justify-between">
        <label htmlFor="rememberMe" className="w-max flex gap-2 items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="hidden peer"
            {...register("rememberMe")}
          />
          <MdCheckBox className="text-primary text-xl hidden peer-checked:block" />
          <MdCheckBoxOutlineBlank className="text-primary-light text-xl peer-checked:hidden" />
          <span>Remember me</span>
        </label>

        <button
          onClick={() => handleViewSwitch("forgotPassword")}
          type="button"
          className="block mt-1 ml-auto text-primary underline underline-offset-2 text-sm"
        >
          Forgot Password?
        </button>
      </div>

      <Button type="submit" className="w-full mt-6">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
