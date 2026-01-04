// Set this component as a client component
"use client";
import { ChangeEvent } from "react";
// Select Requirements
import { SelectOption } from "../config/select";
// Select Props
interface Props {
  readonly label: string;
  readonly optionsList: SelectOption[];
  readonly name: string;
  readonly onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
// Select Main Function
function Select({ label, optionsList, name, onChange }: Props) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="font-medium text-gray-700 dark:text-gray-300 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        className="my-2 w-full rounded-md outline-2 py-2 pl-2 bg-white text-black outline-gray-400 focus-within:outline-primary dark:bg-gray-800 dark:text-white dark:outline-gray-700 font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {optionsList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
