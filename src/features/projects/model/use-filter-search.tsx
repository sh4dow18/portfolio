// Set this hook as a client hook
"use client";
// Use Filter Search Hook Requirements
import { ChangeEvent, useState } from "react";
import { Project } from "../config/projects";
import { DEFAULT_FILTERS, Filters } from "../config/filter-search";
// Use Filter Search Hook Main Function
function useFilterSearch(originalList: Project[], UpdateList: (list: Project[]) => void) {
  // Use Filter Search Hook Main Hooks
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  // Apply new Filters Function
  const ApplyFilters = (newFilters: Filters) => {
    // Set new filtered list as Original List
    let filteredList = originalList;
    // Filter by Search from Input if there is not empty
    if (newFilters.search.trim() !== "") {
      // Get New Value
      const VALUE = newFilters.search.toLowerCase();
      // Filter by substring in title
      filteredList = filteredList.filter((project) => project.title.toLowerCase().includes(VALUE));
    }
    // Filter by Owner if there is not default
    if (newFilters.own !== "0") {
      // Check if the project is own
      const IS_OWN = newFilters.own === "1";
      // Filter by Ownership
      filteredList = filteredList.filter((project) => project.own === IS_OWN);
    }
    // Filter by Tech if there is not default
    if (newFilters.tech !== "0") {
      // Filter by Tech Id
      filteredList = filteredList.filter((project) =>
        project.stack.some((tech) => tech.id === newFilters.tech),
      );
    }
    // Update the search list with the new filtered List
    UpdateList(filteredList);
  };
  // General on Change Function
  const GeneralOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    property: string,
  ) => {
    // Get new Value
    const VALUE = event.target.value;
    // Creates New Filters Object
    const NEW_FILTERS = {
      ...filters,
      [property]: VALUE,
    };
    // Set new filters
    setFilters(NEW_FILTERS);
    ApplyFilters(NEW_FILTERS);
  };
  // Search On Change Function
  const SearchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    GeneralOnChange(event, "search");
  };
  // Own On Change Function
  const OwnOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    GeneralOnChange(event, "own");
  };
  // Tech On Change Function
  const TechOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    GeneralOnChange(event, "tech");
  };
  // Return Hooks Functions
  return { SearchOnChange, OwnOnChange, TechOnChange };
}

export default useFilterSearch;
