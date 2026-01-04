// Set this component as a client component
"use client";
// Input Requirements
import { ChangeEvent } from "react";
// Input Props
interface Props {
  readonly label: string;
  readonly example: string;
  readonly name: string;
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
// Input Main Function
function Input({ label, example, name, onChange }: Props) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="font-medium text-gray-700 dark:text-gray-300 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </label>
      {/* Main Input */}
      <input
        id={name}
        name={name}
        type="text"
        placeholder={`Ejemplo: ${example}`}
        onChange={onChange}
        className="my-2 w-full rounded-md outline-2 py-2 pl-2 bg-white text-black outline-gray-400 focus-within:outline-primary dark:bg-gray-800 dark:text-white dark:outline-gray-700 font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      />
    </div>
  );
}

export default Input;
