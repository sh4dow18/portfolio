// Button Requirements
import Link from "next/link";
import { IconType } from "react-icons";
// Button Props
interface Props {
  readonly href: string;
  readonly Icon: IconType;
  readonly title: string;
  readonly newTab?: boolean;
  readonly label?: string;
}
// Button Main Function
function Button({ href, Icon, title, newTab, label }: Props) {
  // Button Main Constants
  const NEW_TAB = newTab === true ? "_blank" : undefined;
  // Return Button Component
  return (
    <Link
      href={href}
      target={NEW_TAB}
      title={title}
      className="group flex gap-1 justify-center w-fit px-3 py-2 rounded-lg border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-50 dark:hover:text-black"
    >
      <Icon className="w-7 h-7 scale-90 fill-gray-900 group-hover:fill-gray-300 dark:fill-gray-300 dark:group-hover:fill-gray-900" />
      {label && (
        <span className="font-small:text-sm font-large:text-lg font-xlarge:text-xl">{label}</span>
      )}
    </Link>
  );
}

export default Button;
