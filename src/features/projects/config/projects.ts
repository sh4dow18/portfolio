// Projects Requirements
import { IconType } from "react-icons";
import { Repository } from "./github";
import {
  BASH,
  CSS3,
  DOTNET,
  KOTLIN,
  NEXT_JS,
  PICO_CSS,
  POSTGRESQL,
  PYTHON,
  SPRING,
  TAILWIND,
  Tech,
  TYPESCRIPT,
} from "./stack";
import { FaBuilding, FaUser } from "react-icons/fa";
// Projects Types
export type Project = {
  id: number;
  name: string;
  title: string;
  own: boolean;
  stack: Tech[];
  summary: string;
  github: Repository[];
  docs: boolean;
  deploy?: string;
};
type ProjectOwnerLogo = {
  Icon: IconType;
  fill: string;
};
type ProjectOwner = {
  logo: ProjectOwnerLogo;
  title: string;
};
// Projects Main Constants
export const OWN_PROJECT: ProjectOwner = {
  logo: {
    Icon: FaUser,
    fill: "fill-primary-light",
  },
  title: "Propio",
};
export const COMPANY_PROJECT: ProjectOwner = {
  logo: {
    Icon: FaBuilding,
    fill: "fill-orange-300",
  },
  title: "Empresarial",
};
// Projects Main List
export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    name: "lab-ucr",
    title: "Sitio oficial del Laboratorio de Ingeniería Química de la Universidad de Costa Rica",
    own: false,
    stack: [NEXT_JS, PICO_CSS, TYPESCRIPT, SPRING, KOTLIN, POSTGRESQL],
    summary:
      "Sitio web oficial de 'Laboratorio de Ingeniería Química de la UCR', que presenta sus servicios y soluciones para usuarios.",
    github: [],
    docs: false,
  },
  {
    id: 2,
    name: "portal-apis",
    title: "Portal de APIs - Revisa y documenta la información de todas las APIs Empresariales",
    own: false,
    stack: [DOTNET],
    summary:
      "API del Portal de APIs que busca mostrar toda la documentación de los endpoints de todas las APIs de la empresa, asi como probar estos mismos.",
    github: [],
    docs: false,
  },
  {
    id: 3,
    name: "mateory",
    title: "Mateory - Resuelve inventarios y colas con modelos simples",
    own: true,
    stack: [NEXT_JS, TAILWIND, TYPESCRIPT],
    summary:
      "Resuelve problemas básicos de inventarios y colas con modelos matemáticos predefinidos y pocos clics en una app web.",
    github: [{ id: 1, name: "Frontend", href: "mateory" }],
    deploy: "https://mateory.vercel.app",
    docs: false,
  },
  {
    id: 4,
    name: "miteve",
    title: "Miteve - Convierte tu contenido en un Netflix en casa",
    own: true,
    stack: [NEXT_JS, TAILWIND, TYPESCRIPT, SPRING, KOTLIN, POSTGRESQL],
    summary:
      "Herramienta web para tener tu propio 'Netflix en casa' y ver contenido descargado desde un solo lugar por internet.",
    github: [
      { id: 1, name: "Frontend", href: "miteve-web" },
      { id: 2, name: "Backend", href: "miteve-api" },
    ],
    deploy: "https://miteve.vercel.app",
    docs: false,
  },
  {
    id: 5,
    name: "nirit",
    title: "Nirit - Entorno Linux minimalista con gestión en mosaico",
    own: true,
    stack: [BASH, PYTHON],
    summary:
      "Entorno de escritorio para GNU/Linux enfocado en ventanas en mosaico, pocos paquetes instalados y alta personalización",
    github: [{ id: 1, name: "Github", href: "nirit" }],
    docs: false,
  },
  {
    id: 6,
    name: "braitec",
    title: "Braitec - Sitio oficial de soluciones tecnológicas",
    own: true,
    stack: [NEXT_JS, CSS3, TYPESCRIPT],
    summary:
      "Sitio web oficial de 'Braitec: Soluciones Tecnológicas', que presenta sus servicios y soluciones tecnológicas para usuarios.",
    github: [{ id: 1, name: "Frontend", href: "braitec" }],
    deploy: "https://braitec-cr.vercel.app",
    docs: false,
  },
];
// Projects Stack
export const STACK: Tech[] = [
  ...new Map(PROJECTS_LIST.flatMap((p) => p.stack).map((t) => [t.id, t])).values(),
];
