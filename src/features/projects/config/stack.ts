// Stack Requirements
import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaPython } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash, SiKotlin, SiSpring, SiTypescript } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
// Stack Types
export type Tech = {
  id: string;
  Icon: IconType;
  name: string;
  fill: string;
};
// Stack Objects
export const NEXT_JS: Tech = {
  id: "next-js",
  Icon: RiNextjsFill,
  name: "Next.js",
  fill: "fill-white",
};
export const TAILWIND: Tech = {
  id: "tailwind",
  Icon: RiTailwindCssFill,
  name: "Tailwind",
  fill: "fill-primary-light",
};
export const TYPESCRIPT: Tech = {
  id: "typescript",
  Icon: SiTypescript,
  name: "Typescript",
  fill: "fill-[#3178C6]",
};
export const SPRING: Tech = {
  id: "spring",
  Icon: SiSpring,
  name: "Spring",
  fill: "fill-[#6DB33F]",
};
export const KOTLIN: Tech = {
  id: "kotlin",
  Icon: SiKotlin,
  name: "Kotlin",
  fill: "fill-[#6B57FF]",
};
export const POSTGRESQL: Tech = {
  id: "postgresql",
  Icon: BiLogoPostgresql,
  name: "PostgreSQL",
  fill: "fill-[#669AC4]",
};
export const BASH: Tech = { id: "bash", Icon: SiGnubash, name: "Bash", fill: "fill-white" };
export const PYTHON: Tech = {
  id: "python",
  Icon: FaPython,
  name: "Python",
  fill: "fill-yellow-300",
};
export const CSS3: Tech = {
  id: "css3",
  Icon: FaCss3Alt,
  name: "CSS 3",
  fill: "fill-primary-light",
};
export const PICO_CSS: Tech = {
  id: "pico-css",
  Icon: FaCss3Alt,
  name: "Pico CSS",
  fill: "fill-primary-light",
};
export const DOTNET: Tech = {
  id: "dotnet",
  Icon: AiOutlineDotNet,
  name: ".NET",
  fill: "fill-[#6D4EA2]",
};
