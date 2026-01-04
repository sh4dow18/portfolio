// Set this page as a client page
"use client";
// Projects Page Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import { PageTitle } from "@/shared/ui";
import { FilterSearch, Project } from "./ui";
import { useProjectsPage } from "./model";
// Projects Page Main Constants
const PAGE_INFO = ROUTES_MAP["projects"];
// Projects Page Main Function
function ProjectsPage() {
  // Projects Page Main Hooks
  const { originalList, list, setList } = useProjectsPage();
  // Return Projects Page
  return (
    <section className="flex flex-col gap-7 place-content-center">
      {/* Projects Title Section */}
      <div className="flex flex-wrap place-content-between gap-3">
        <PageTitle title={PAGE_INFO.title} summary={PAGE_INFO.summary} Icon={PAGE_INFO.Icon} />
        <FilterSearch originalList={originalList} UpdateList={setList} />
      </div>
      {/* Projects List Container */}
      <div className="flex flex-col gap-10">
        {list.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            title={project.title}
            own={project.own}
            stack={project.stack}
            summary={project.summary}
            github={project.github}
            deploy={project.deploy}
            docs={project.docs}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
