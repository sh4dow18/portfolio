// Project Button Requirements
import Link from "next/link";
import { IconType } from "react-icons";
// Project Button Props
interface Props {
  Icon: IconType;
  name: string;
  href?: string;
}
// Project Button Main Function
function Button({ Icon, name, href }: Props) {
  // Project Button Main Constants
  const STYLES =
    "group flex gap-1 place-items-center w-fit px-3 py-2 rounded-lg border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-50 dark:hover:text-black";
  const BUTTON_STYLES = `${STYLES} disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 dark:disabled:border-none`;
  const SPAN_STYLES = "font-small:text-sm font-large:text-lg font-xlarge:text-xl";
  // Return Project Button Component
  return href ? (
    <Link href={href} target="_blank" className={STYLES}>
      <Icon className="w-5 h-5 scale-90 fill-gray-900 group-hover:fill-gray-300 dark:fill-gray-300 dark:group-hover:fill-gray-900" />
      <span className={SPAN_STYLES}>{name}</span>
    </Link>
  ) : (
    <button className={BUTTON_STYLES} disabled>
      <Icon />
      <span className={SPAN_STYLES}>{name}</span>
    </button>
  );
}

export default Button;
