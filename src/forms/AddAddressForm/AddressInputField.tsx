import clsx from "clsx";

interface AddressInputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

const AddressInputField = ({
  id,
  label,
  placeholder,
  isRequired = false,
  register,
}: AddressInputFieldProps) => {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-sm text-uiBlack-light">
        {label}
      </label>

      <div className="relative">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          {...register(id, { required: isRequired })}
          className={clsx(
            "w-full px-4 py-3 rounded-sm border outline-0",
            "focus:border-primary",
            "font-medium text-uiBlack",
            "placeholder-slate-400/70 placeholder:font-normal"
          )}
        />

        {isRequired && (
          <span className="absolute top-2 left-2 text-primary">*</span>
        )}
      </div>
    </div>
  );
};

export default AddressInputField;
