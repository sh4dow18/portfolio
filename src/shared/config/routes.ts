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
    summary: "Portafolio de Ramsés Solano Arias, donde se encuentran sus experiencias y proyectos.",
    Icon: FaHome,
    inSitemap: true,
    inHome: false,
  },
];
// Map that allows to get page data easier
export const ROUTES_MAP = Object.fromEntries(ROUTES_LIST.map((route) => [route.path, route]));
