import { Chevron } from "@assets/icons";
import { memo, useState } from "react";

type DropdownProps = {
  label: string;
  options?: Array<{ value: string; name: string }>;
};

const DropdownView = ({
  label,
  options = [],
}: DropdownProps): React.ReactElement => {
  const [value, setValue] = useState("");
  const handleSelect = (
    event:
      | React.FocusEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setValue(event.target.value);
  };

  return (
    <div className="relative mt-2 w-full sm:m-0 sm:mr-1">
      <select
        value={value}
        className="w-full cursor-pointer appearance-none border border-gray-800 bg-transparent py-2 pl-3 pr-6 lowercase text-gray-800 focus:outline-none sm:py-1"
        onBlur={handleSelect}
        onChange={handleSelect}
        disabled={options.length === 0}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        <option value="">All</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
        <Chevron />
      </div>
    </div>
  );
};

export const Dropdown = memo(DropdownView);
