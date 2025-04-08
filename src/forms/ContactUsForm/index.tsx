"use client";

import Button from "@/components/ui/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import DatePickerField from "./DatePickerField";

interface IFormInput {
  name: string;
  contact: string;
  city: string;
  email: string;
  note: string;
  date: string;
  guests: string;
}

const ContactUsForm = () => {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      contact: "",
      city: "",
      email: "",
      note: "",
      date: "",
      guests: "",
    },
  });

  const { guests } = watch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="contact-us-form"
      className="space-y-4"
    >
      {/* Name field */}
      <div className="relative">
        <span className="text-primary absolute top-0 -left-3">*</span>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true })}
          type="text"
          autoComplete="off"
          placeholder="Your Name"
          className="form-input"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Contact field */}
        <div className="relative">
          <span className="text-primary absolute top-0 -left-3">*</span>
          <label htmlFor="contact" className="sr-only">
            Contact
          </label>
          <input
            id="contact"
            {...register("contact", { required: true })}
            type="number"
            autoComplete="off"
            placeholder="Contact number"
            className="form-input hide-input-number-arrows"
          />
        </div>

        {/* City field */}
        <div className="relative">
          <span className="text-primary absolute top-0 -left-3">*</span>
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            id="city"
            {...register("city", { required: true })}
            type="text"
            placeholder="City"
            autoComplete="off"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        {/* Date field */}
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <DatePickerField {...field} />}
        />

        {/* Guest field */}
        <div className="relative">
          <span className="text-primary absolute top-0 -left-3">*</span>

          <label htmlFor="guest" className="sr-only">
            No. of guests
          </label>

          <select
            id="guests"
            {...register("guests", { required: true })}
            className={clsx(
              "form-input select-guest appearance-none",
              !guests && "font-normal text-uiBlack/50"
            )}
          >
            <option hidden value={""}>
              No. of guests
            </option>
            <option value="Less than 15">Less than 15</option>
            <option value="15-25">15-25</option>
            <option value="25-50">25-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
      </div>

      {/* Email field */}
      <div className="relative">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          {...register("email")}
          type="text"
          placeholder="Email address"
          autoComplete="off"
          className="form-input"
        />
      </div>

      {/* Note field */}
      <div className="relative">
        <label htmlFor="note" className="sr-only">
          Note
        </label>
        <input
          id="note"
          {...register("note")}
          type="text"
          placeholder="What's the occasion?"
          autoComplete="off"
          className="form-input"
        />
      </div>

      <Button disabled={!isValid} type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default ContactUsForm;
