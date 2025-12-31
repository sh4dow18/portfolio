// Timeline Requirements
import { TimelineObject } from "../config/timeline";
// Timeline Props
interface Props {
  readonly list: TimelineObject[];
}
// Timeline Main Function
function Timeline({ list }: Props) {
  return (
    <ol className="relative border-l border-gray-700 ml-3 pl-3">
      {list.map((item) => (
        <li key={item.id} className="mb-12 ml-4">
          {/* Time Line Point */}
          <div className="absolute w-3 h-3 bg-primary-light rounded-full -left-1.5 mt-1.5" />
          {/* Information Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Section */}
            <div className="flex flex-col gap-1 font-small:text-sm font-large:text-lg font-xlarge:text-xl">
              <h3 className="text-primary font-semibold dark:text-primary-light">{item.title}</h3>
              <span className="font-medium text-black dark:text-white">{item.subtitle}</span>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-small:text-xs font-large:text-base font-xlarge:text-lg">
                {item.date}
              </span>
            </div>
            {/* Second Section */}
            {item.content}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
