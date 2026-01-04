// Select Requirements
import { COMPANY_PROJECT, OWN_PROJECT, STACK } from "./projects";
// Select Types
export type SelectOption = {
  display: string;
  value: number | string;
};
// Select Main Constants
const DEFAULT_OPTION: SelectOption = {
  display: "Seleccionar una opción",
  value: 0,
};
// Select Options Lists
export const PROJECTS_OWNERS_OPTIONS_LIST: SelectOption[] = [
  DEFAULT_OPTION,
  {
    display: OWN_PROJECT.title,
    value: 1,
  },
  {
    display: COMPANY_PROJECT.title,
    value: 2,
  },
];
export const PROJECTS_OPTIONS_LIST: SelectOption[] = [
  DEFAULT_OPTION,
  ...STACK.map((tech) => ({
    display: tech.name,
    value: tech.id,
  })),
];
