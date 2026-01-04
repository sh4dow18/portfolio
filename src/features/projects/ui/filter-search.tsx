// Set this component as a client component
"use client";
// Filter Search Requirements
import { Project } from "../config/projects";
import { PROJECTS_OPTIONS_LIST, PROJECTS_OWNERS_OPTIONS_LIST } from "../config/select";
import Input from "./input";
import Select from "./select";
import { useFilterSearch } from "../model";
// Filter Search Props
interface Props {
  readonly originalList: Project[];
  readonly UpdateList: (list: Project[]) => void;
}
// Filter Search Main Function
function FilterSearch({ originalList, UpdateList }: Props) {
  // Filter Search Main Hooks
  const { SearchOnChange, OwnOnChange, TechOnChange } = useFilterSearch(originalList, UpdateList);
  // Return Filter Search Component
  return (
    <form className="flex flex-col gap-1 items-end w-full min-[670px]:gap-3 min-[765px]:w-fit min-[765px]:flex-row min-[765px]:gap-3">
      {/* Title Input */}
      <Input label="Nombre" name="project" example="Mateory" onChange={SearchOnChange} />
      {/* Ownership Select */}
      <Select
        label="Propiedad"
        name="own"
        optionsList={PROJECTS_OWNERS_OPTIONS_LIST}
        onChange={OwnOnChange}
      />
      {/* Tech Select */}
      <Select
        label="Tecnología"
        name="tech"
        optionsList={PROJECTS_OPTIONS_LIST}
        onChange={TechOnChange}
      />
    </form>
  );
}

export default FilterSearch;
