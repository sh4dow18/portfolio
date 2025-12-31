// Experiences Page Requirements
import { JOBS_LIST } from "./config/jobs";
import { TimelineObject } from "@/shared/config/timeline";
import { PageTitle, Timeline } from "@/shared/ui";
import { ROUTES_MAP } from "@/shared/config/routes";
// Experiences Page Main Constants
const PAGE_INFO = ROUTES_MAP["experience"];
const TIMELINE_LIST: TimelineObject[] = JOBS_LIST.map((job) => ({
  id: job.id,
  title: job.title,
  subtitle: job.company,
  date: job.date,
  content: (
    <p className="text-sm leading-7 dark:text-gray-400 md:text-base md:col-span-2 font-small:text-sm font-large:text-lg font-large:leading-8 font-xlarge:text-xl font-xlarge:leading-9">
      {job.description}
    </p>
  ),
}));
// Experiences Page Main Function
function ExperiencePage() {
  // Return Experiences Page
  return (
    <section className="flex flex-col gap-7 place-content-center">
      {/* Experience Title Section */}
      <PageTitle title={PAGE_INFO.title} summary={PAGE_INFO.summary} Icon={PAGE_INFO.Icon} />
      {/* Experience List */}
      <Timeline list={TIMELINE_LIST} />
    </section>
  );
}

export default ExperiencePage;
