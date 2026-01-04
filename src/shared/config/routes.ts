// Routes Requirements
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { HiMiniBriefcase, HiMiniCodeBracket } from "react-icons/hi2";
// Route Type
type Route = {
  readonly path: string;
  readonly title: string;
  readonly summary: string;
  readonly Icon: IconType;
  readonly inSitemap: boolean;
};
// Routes List
export const ROUTES_LIST: Route[] = [
  {
    path: "",
    title: "Inicio",
    summary: "Portafolio de Ramsés Solano Arias, donde se encuentran sus experiencias y proyectos.",
    Icon: FaHome,
    inSitemap: true,
  },
  {
    path: "experience",
    title: "Experiencia",
    summary: "Experiencia Laboral de Ramsés Solano Arias hasta la actualidad",
    Icon: HiMiniBriefcase,
    inSitemap: true,
  },
  {
    path: "projects",
    title: "Proyectos",
    summary: "Todos los proyectos en los que Ramsés Solano Arias ha trabajado.",
    Icon: HiMiniCodeBracket,
    inSitemap: true,
  },
];
// Map that allows to get page data easier
export const ROUTES_MAP = Object.fromEntries(ROUTES_LIST.map((route) => [route.path, route]));
