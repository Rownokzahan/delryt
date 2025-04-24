import clsx from "clsx";

interface AddressInputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  defaultValue?: string;
}

const AddressInputField = ({
  id,
  label,
  placeholder,
  isRequired = false,
  register,
  defaultValue,
}: AddressInputFieldProps) => {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-xs text-uiBlack-light">
        <span>{label}</span> {!isRequired && <span>(Optional)</span>}
      </label>

      <input
        type="text"
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(id, { required: isRequired })}
        className={clsx(
          "w-full p-2 rounded-sm border outline-0",
          "focus:border-primary",
          "font-medium text-uiBlack text-sm",
          "placeholder-uiBlack-light/50 placeholder:font-normal"
        )}
      />
    </div>
  );
};

export default AddressInputField;
