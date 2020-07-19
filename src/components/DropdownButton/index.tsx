import React from "react";
import { ReactComponent as CaretDown } from "../../assets/caret-down.svg";

type DropdownButtonProps = {
  label: string;
  options?: { value: string; label: string }[];
};

export const DropdownButton = ({
  label,
  options,
}: DropdownButtonProps): React.ReactElement => {
  const [value, setValue] = React.useState("");

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
  };

  return (
    <div className="relative mt-2 sm:m-0 sm:mr-1 w-full">
      <select
        defaultValue={value}
        className="appearance-none w-full bg-transparent border border-gray-800 text-gray-800 py-1 pl-3 pr-6 lowercase focus:outline-none "
        onBlur={handleBlur}
      >
        <option value={value}>{label}</option>
        {options !== undefined &&
          options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
        <CaretDown />
      </div>
    </div>
  );
};
