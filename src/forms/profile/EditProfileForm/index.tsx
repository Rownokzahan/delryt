"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { UpdateUser } from "@/types";
import ProfileInputField from "../components/ProfileInputField";
import ProfileSubmitButton from "../components/ProfileSubmitButton";

interface EditProfileFormProps {
  defaultValues: UpdateUser;
  onSubmit: SubmitHandler<UpdateUser>;
  isSubmitting: boolean;
}

const EditProfileForm = ({
  defaultValues,
  onSubmit,
  isSubmitting,
}: EditProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUser>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-3 sm:px-8 sm:py-4 bg-gray-100 max-h-[70vh] overflow-y-auto space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <ProfileInputField
            id="f_name"
            label="First Name"
            registerProps={{
              ...register("f_name", {
                required: { value: true, message: "First Name is required." },
              }),
            }}
            fieldError={errors.f_name}
          />

          <ProfileInputField
            id="l_name"
            label="Last Name"
            registerProps={{
              ...register("l_name", {
                required: { value: true, message: "Last Name is required." },
              }),
            }}
            fieldError={errors.l_name}
          />
        </div>

        <ProfileInputField
          id="email"
          type="email"
          label="Email"
          registerProps={{
            ...register("email", {
              required: { value: true, message: "Email is required." },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address.",
              },
              validate: (value) => {
                if (value.length < 10) {
                  return "Email must be at least 10 characters.";
                }
                return true;
              },
            }),
          }}
          fieldError={errors.email}
        />

        <ProfileInputField
          id="phone"
          label="Phone"
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
          fieldError={errors.phone}
        />
      </div>

      {/* Submit Button */}
      <ProfileSubmitButton label="Update Profile" isSubmitting={isSubmitting} />
    </form>
  );
};

export default EditProfileForm;
