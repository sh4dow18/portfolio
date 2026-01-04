// Shield Requirements
import { IconType } from "react-icons";
// Shield Props
interface Props {
  readonly logo: {
    Icon: IconType;
    fill: string;
  };
  readonly title: string;
}
// Shield Main Function
function Shield({ logo, title }: Props) {
  return (
    <div className="flex place-items-center gap-1 w-fit bg-gray-800 text-white text-xs p-1 rounded-sm border border-gray-700">
      <logo.Icon className={logo.fill} />
      <span className="font-large:text-sm font-xlarge:text-base">{title}</span>
    </div>
  );
}

export default Shield;
