"use client";

import Button from "@/components/ui/Button";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import GenderSelection from "./GenderSelection";

interface Inputs {
  name: string;
  email: string;
  birthdate?: string;
  gender?: string;
}

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<Inputs>();

  const birthdateValue = watch("birthdate");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-8 py-4 bg-gray-100 space-y-3">
        {/* Name Input Field */}
        <div className="space-y-3">
          <label htmlFor="name" className="text-sm text-uiBlack-light">
            Your Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className={clsx(
                "w-full px-4 py-3 rounded-sm border outline-0",
                "focus:border-primary",
                "font-medium text-uiBlack",
                "placeholder-slate-400/70 placeholder:font-normal"
              )}
            />
            <span className="absolute top-2 left-2 text-primary">*</span>
          </div>
        </div>

        {/* Email Input Field */}
        <div className="space-y-3">
          <label htmlFor="email" className="text-sm text-uiBlack-light">
            Your Email Id
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className={clsx(
                "w-full px-4 py-3 rounded-sm border outline-0",
                "focus:border-primary",
                "font-medium text-uiBlack",
                "placeholder-slate-400/70 placeholder:font-normal"
              )}
            />
            <span className="absolute top-2 left-2 text-primary">*</span>
          </div>
        </div>

        {/* Birthdate Input Field */}
        <div className="space-y-3">
          <label htmlFor="birthdate" className="text-sm text-uiBlack-light">
            Your date of birth
          </label>

          <input
            type="date"
            id="birthdate"
            {...register("birthdate", { required: false })}
            className={clsx(
              "w-full px-4 py-3 rounded-sm border outline-0",
              "focus:border-primary",
              "focus:font-medium focus:text-uiBlack",
              birthdateValue
                ? "font-medium text-uiBlack"
                : "font-normal text-slate-400/70"
            )}
          />
        </div>

        <GenderSelection register={register} />
      </div>

      {/* Submit Button */}
      <div className="px-3 py-2 shadow-md">
        <Button type="submit" className="w-full" disabled={!isValid}>
          Save And Update Details
        </Button>
      </div>
    </form>
  );
};

export default EditProfileForm;
