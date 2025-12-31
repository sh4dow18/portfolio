// Badge Requirements
import Link from "next/link";
// Badge Props
interface Props {
  readonly working: boolean;
}
// Badge Main Function
function Badge({ working }: Props) {
  // Badge Main Props
  const MESSAGE = working ? "Actualmente Trabajando" : "Disponible para Trabajar";
  // Return Badge Component
  return (
    <Link
      className="transition-all hover:scale-105"
      href="https://www.linkedin.com/in/ramsés-solano-arias-981029227/"
      target="_blank"
    >
      <div className="flex items-center">
        <span className="relative inline-flex overflow-hidden rounded-full p-px">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
          <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap font-small:text-xs font-large:text-base font-xlarge:text-lg">
            {MESSAGE}
          </div>
        </span>
      </div>
    </Link>
  );
}

export default Badge;
