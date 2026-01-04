// Project Requirements
import Image from "next/image";
import { Tech } from "../config/stack";
import { Repository } from "../config/github";
import Button from "./button";
import { FaGithub } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SiGoogledocs } from "react-icons/si";
import Shield from "./shield";
import { COMPANY_PROJECT, OWN_PROJECT } from "../config/projects";
// Project Props
interface Props {
  readonly name: string;
  readonly title: string;
  readonly own: boolean;
  readonly stack: Tech[];
  readonly summary: string;
  readonly github: Repository[];
  readonly docs: boolean;
  readonly deploy?: string;
}
// Project Main Function
function Project({ name, title, own, stack, summary, github, docs, deploy }: Props) {
  // Project Main Constants
  const PROJECT_OWNER = own ? OWN_PROJECT : COMPANY_PROJECT;
  // Return Project Component
  return (
    <article className="flex flex-wrap gap-6 min-[800px]:flex-nowrap">
      {/* Project Image */}
      <Image
        src={`/projects/${name}.webp`}
        alt={`${name} Project Image`}
        width={735}
        height={360}
        className="rounded-xl border border-gray-700 w-full min-[800px]:min-w-72 min-[800px]:max-w-72 min-[800px]:h-36"
        loading="eager"
      />
      {/* Project Information Section */}
      <section className="flex flex-col gap-3 md:gap-2">
        {/* Project Title */}
        <h3 className="text-black font-semibold text-xl dark:text-white font-small:text-lg font-large:text-2xl font-xlarge:text-3xl">
          {title}
        </h3>
        {/* Project Stack */}
        <div className="flex flex-wrap gap-1">
          {/* Owner Shield */}
          <Shield logo={PROJECT_OWNER.logo} title={PROJECT_OWNER.title} />
          {/* Stack Shields */}
          {stack.map((tech) => (
            <Shield
              key={tech.id}
              logo={{
                Icon: tech.Icon,
                fill: tech.fill,
              }}
              title={tech.name}
            />
          ))}
        </div>
        {/* Project Description */}
        <p className="dark:text-gray-400 font-small:text-sm font-large:text-lg font-xlarge:text-xl">
          {summary}
        </p>
        {/* Project Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Repositories Buttons */}
          {github.map((repository) => (
            <Button
              key={repository.id}
              href={`https://github.com/sh4dow18/${repository.href}`}
              Icon={FaGithub}
              name={repository.name}
            />
          ))}
          {/* Deploy Button */}
          <Button href={deploy} Icon={HiOutlineRocketLaunch} name="Deploy" />
          {/* Docs Button */}
          <Button href={docs ? `/projects/${name}` : undefined} Icon={SiGoogledocs} name="Docs" />
        </div>
      </section>
    </article>
  );
}

export default Project;
