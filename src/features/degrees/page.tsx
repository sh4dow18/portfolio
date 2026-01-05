// Degrees Page Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import { TimelineObject } from "@/shared/config/timeline";
import { PageTitle, Timeline } from "@/shared/ui";
import { DEGREES_LIST } from "./config/degrees";
import Image from "next/image";
// Degrees Page Main Constants
const PAGE_INFO = ROUTES_MAP["degrees"];
const TIMELINE_LIST: TimelineObject[] = DEGREES_LIST.map((degree) => ({
  id: degree.id,
  title: degree.title,
  subtitle: degree.company,
  date: degree.date,
  content: (
    <Image
      src={`/degrees/${degree.image}.webp`}
      alt={`${degree.title} Degree`}
      width={700}
      height={700}
      loading="eager"
      className="w-full rounded-xl border-4 border-gray-300 ring-1 ring-black/70 dark:border-gray-800 dark:ring-white/40 md:col-span-2 min-[100rem]:col-span-1"
    />
  ),
}));
// Degrees Page Main Function
function DegreesPage() {
  return (
    <section className="flex flex-col gap-7 place-content-center">
      {/* Degrees Title Section */}
      <PageTitle title={PAGE_INFO.title} summary={PAGE_INFO.summary} Icon={PAGE_INFO.Icon} />
      {/* Degrees List */}
      <Timeline list={TIMELINE_LIST} />
    </section>
  );
}

export default DegreesPage;
