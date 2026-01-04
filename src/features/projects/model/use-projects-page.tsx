// Set this hook as a client hook
"use client";
// Use Project Page Hook Requirements
import { useState } from "react";
import { PROJECTS_LIST } from "../config/projects";
// Use Project Page Hook Main Function
function useProjectsPage() {
  // Use Project Page Hook Main Hooks
  const [list, setList] = useState(PROJECTS_LIST);
  // Return Hooks Functions
  return { originalList: PROJECTS_LIST, list, setList };
}

export default useProjectsPage;
