"use client";

import AddressTypeSelection from "./AddressTypeSelection";
import { Address } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "../components/ProfileSubmitButton";
import ProfileInputField from "../components/ProfileInputField";

interface AddressFormProps {
  defaultValues?: Partial<Address>;
  onSubmit: SubmitHandler<Address>;
  isSubmitting: boolean;
}

const AddressForm = ({
  defaultValues,
  onSubmit,
  isSubmitting,
}: AddressFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-3 sm:px-8 sm:py-4 bg-gray-100 max-h-[70vh] overflow-y-auto space-y-3">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <ProfileInputField
            id="contact_person_name"
            label="Full Name"
            registerProps={{
              ...register("contact_person_name", {
                required: { value: true, message: "Name is required." },
              }),
            }}
            fieldError={errors.contact_person_name}
          />

          <ProfileInputField
            id="contact_person_number"
            label="Phone"
            registerProps={{
              ...register("contact_person_number", {
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
            fieldError={errors.contact_person_number}
          />
        </div>

        <ProfileInputField
          id="address"
          label="Delivery Address"
          registerProps={{
            ...register("address", {
              required: {
                value: true,
                message: "Delivery address is required.",
              },
            }),
          }}
          fieldError={errors.address}
        />

        <ProfileInputField
          id="road"
          label="Street"
          isOptional={true}
          registerProps={{
            ...register("road"),
          }}
          fieldError={errors.road}
        />

        <div className="grid grid-cols-2 gap-4">
          <ProfileInputField
            id="house"
            label="House"
            isOptional={true}
            registerProps={{
              ...register("house"),
            }}
            fieldError={errors.house}
          />

          <ProfileInputField
            id="floor"
            label="Floor"
            isOptional={true}
            registerProps={{
              ...register("floor"),
            }}
            fieldError={errors.floor}
          />
        </div>

        <AddressTypeSelection register={register} fieldError={errors.address_type} />
      </div>

      {/* Submit Button */}
      <SubmitButton label="Save Address Details" isSubmitting={isSubmitting} />
    </form>
  );
};

export default AddressForm;
