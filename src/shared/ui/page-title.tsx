// Page Title Requirements
import { IconType } from "react-icons";
// Page Title Props
interface Props {
  readonly title: string | { first: string; colored: string };
  readonly summary: string;
  readonly Icon: IconType;
}
// Page Title Main Function
function PageTitle({ title, summary, Icon }: Props) {
  return (
    <section className="space-y-4">
      {/* Page Title Title Section */}
      <section className="flex flex-wrap gap-2 items-center sm:gap-4">
        <Icon className="w-9 h-9 dark:text-gray-300 high-contrast:text-black" />
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 sm:text-4xl font-small:text-2xl font-small:sm:text-3xl font-large:text-4xl font-large:sm:text-5xl font-xlarge:text-5xl font-xlarge:sm:text-6xl">
          {typeof title === "string" ? (
            title
          ) : (
            <>
              {title.first} <span className="text-primary">{title.colored}</span>
            </>
          )}
        </h1>
      </section>
      {/* Page Title Sumarry Paragraph */}
      <p className="text-lg text-gray-700 dark:text-gray-400 high-contrast:text-black font-small:text-base font-large:text-xl font-xlarge:text-2xl">
        {summary}
      </p>
    </section>
  );
}

export default PageTitle;
