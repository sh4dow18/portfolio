// Project Button Requirements
import Link from "next/link";
import { cloneElement, ReactElement } from "react";
// Project Button Props
interface Props {
  href: string;
  icon: ReactElement<{ className?: string }>;
  name: string;
}
// Project Button Main Function
function ProjectButton({ href, icon, name }: Props) {
  // Returns Project Button
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex gap-1 place-items-center w-fit px-3 py-2 rounded-lg border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-50 dark:hover:text-black"
    >
      {cloneElement(icon, {
        className:
          "w-5 h-5 scale-90 fill-gray-900 group-hover:fill-gray-300 dark:fill-gray-300 dark:group-hover:fill-gray-900",
      })}
      <span>{name}</span>
    </Link>
  );
}

export default ProjectButton;
