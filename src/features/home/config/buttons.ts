// Buttons Requirements
import { IconType } from "react-icons";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiAcademicCap, HiMiniBriefcase, HiMiniCodeBracket } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
// Buttons Type
type Button = {
  href: string;
  icon: IconType;
  title: string;
  newTab?: boolean;
  label?: string;
};
// Social Buttons List
export const SOCIAL_BUTTONS_LIST: Button[] = [
  {
    href: "https://github.com/sh4dow18",
    icon: FaGithub,
    title: "Github",
    newTab: true,
  },
  {
    href: "https://www.linkedin.com/in/ramsés-solano-arias-981029227/",
    icon: FaLinkedin,
    title: "Linkedin",
    newTab: true,
  },
  {
    href: "mailto:ramses.solano.arias@gmail.com",
    icon: MdEmail,
    title: "Enviar Correo Electrónico",
    newTab: true,
  },
  {
    href: "/docs/cv-ramses-solano-arias-spanish.pdf",
    icon: FaFilePdf,
    title: "Abrir PDF",
    newTab: true,
    label: "CV Español",
  },
  {
    href: "/docs/cv-ramses-solano-arias-english.pdf",
    icon: FaFilePdf,
    title: "Abrir PDF",
    newTab: true,
    label: "CV Inglés",
  },
];
// Pages Buttons List
export const PAGES_BUTTONS_LIST: Button[] = [
  {
    href: "/experience",
    icon: HiMiniBriefcase,
    title: "Ver Experiencia Laboral",
    label: "Ver Experiencia Laboral",
  },
  {
    href: "/projects",
    icon: HiMiniCodeBracket,
    title: "Ver Proyectos Hechos",
    label: "Ver Proyectos Hechos",
  },
  {
    href: "/degrees",
    icon: HiAcademicCap,
    title: "Ver Títulos Obtenidos",
    label: "Ver Títulos Obtenidos",
  },
];
