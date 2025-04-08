import { useState } from "react";

interface DatePickerFieldProps {
  value: string;
  onChange: () => void;
  onBlur: () => void;
}

const DatePickerField = ({ value, onBlur, onChange }: DatePickerFieldProps) => {
  const [inputType, setInputType] = useState<"text" | "date">("text");

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputType(e.target.value ? "date" : "text");
    onBlur(); // Trigger onBlur from react-hook-form
  };

  return (
    <div className="relative">
      <span className="text-primary absolute top-0 -left-3">*</span>
      <label htmlFor="date" className="sr-only">
        Date
      </label>

      <input
        id="date"
        name="date"
        type={inputType}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Date"
        autoComplete="off"
        className="h-12 form-input"
      />
    </div>
  );
};

export default DatePickerField;
