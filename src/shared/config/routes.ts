// Routes Requirements
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
// Route Type
type Route = {
  readonly path: string;
  readonly title: string;
  readonly summary: string;
  readonly Icon: IconType;
  readonly inSitemap: boolean;
  readonly inHome: boolean;
};
// Routes List
export const ROUTES_LIST: Route[] = [
  {
    path: "",
    title: "Inicio",
    summary:
      "Mateory es una herramienta web que simplifica la resolución de problemas de Teorías de Inventarios y Teorías de Colas. Optimice sus cálculos y visualice las fórmulas detrás de cada modelo.",
    Icon: FaHome,
    inSitemap: true,
    inHome: false,
  },
];
// Map that allows to get page data easier
export const ROUTES_MAP = Object.fromEntries(ROUTES_LIST.map((route) => [route.path, route]));
