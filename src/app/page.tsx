// Portfolio Page Requirements
import { BriefcaseIcon, CodeBracketIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaFilePdf,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaNpm,
  FaPython,
} from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoLogoVercel } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGnubash, SiKotlin, SiSpring, SiTypescript } from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
// Portfolio Page Main Function
export default function Home() {
  // Portfolio Page Main Constants
  const HERO_BUTTONS_LIST = [
    {
      href: "https://github.com/sh4dow18",
      icon: <FaGithub />,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/ramsés-solano-arias-981029227/",
      icon: <FaLinkedin />,
      label: "Linkedin",
    },
    {
      href: "mailto:ramses.solano.arias@gmail.com",
      icon: <MdEmail />,
      label: "Correo Electrónico",
    },
    {
      href: "/docs/CV Ramses Solano Arias ES.pdf",
      icon: <FaFilePdf />,
      label: "CV Español",
    },
    {
      href: "/docs/CV Ramses Solano Arias EN.pdf",
      icon: <FaFilePdf />,
      label: "CV Inglés",
    },
  ];
  const EXPERIENCE_LIST = [
    {
      title: "Scrum Master",
      company: "Universidad de Costa Rica",
      date: "Marzo 2023 – Julio 2024",
      description:
        "Lideré un equipo de 5 desarrolladores, logrando crear un sistema web profesional reconocido como el mejor proyecto de Ingeniería en Sistemas de la generación 2023-2024. Diseñé el front-end con Next.js, TypeScript y PicoCSS, e implementé un back-end en SpringBoot con Spring Security y Kotlin Multiplataforma, integrando PostgreSQL. Documenté completamente el sistema, combinando formatos preexistentes y desarrollando nuevos. Desplegué entornos en la nube para pruebas con Render, Cloudflare R2, Vercel y un servidor on-prem con Ubuntu para producción.",
    },
  ];
  const PROJECTS_LIST = [
    {
      image: "mateory",
      title: "Mateory - Resuelve inventarios y colas con modelos simples",
      stack: [
        { icon: <RiNextjsFill />, name: "Next.js", fill: "fill-white" },
        {
          icon: <RiTailwindCssFill />,
          name: "Tailwind",
          fill: "fill-primary-light",
        },
        { icon: <SiTypescript />, name: "Typescript", fill: "fill-[#3178C6]" },
      ],
      description:
        "Resuelve problemas básicos de inventarios y colas con modelos matemáticos predefinidos y pocos clics en una app web.",
      buttons: [
        {
          name: "Código",
          icon: <FaGithub />,
          href: "https://github.com/sh4dow18/mateory",
        },
        {
          name: "Deploy",
          icon: <HiOutlineRocketLaunch />,
          href: "https://mateory.vercel.app",
        },
      ],
    },
    {
      image: "miteve-web",
      title: "Miteve Web - Convierte tu contenido en un Netflix en casa",
      stack: [
        { icon: <RiNextjsFill />, name: "Next.js", fill: "fill-white" },
        {
          icon: <RiTailwindCssFill />,
          name: "Tailwind",
          fill: "fill-primary-light",
        },
        { icon: <SiTypescript />, name: "Typescript", fill: "fill-[#3178C6]" },
      ],
      description:
        "Herramienta web para tener tu propio 'Netflix en casa' y ver contenido descargado desde un solo lugar por internet.",
      buttons: [
        {
          name: "Código",
          icon: <FaGithub />,
          href: "https://github.com/sh4dow18/miteve-web",
        },
        {
          name: "Deploy",
          icon: <HiOutlineRocketLaunch />,
          href: "https://miteve.vercel.app",
        },
      ],
    },
    {
      image: "miteve-api",
      title: "Miteve API - API que gestiona películas y series de Miteve",
      stack: [
        { icon: <SiSpring />, name: "Spring", fill: "fill-[#6DB33F]" },
        { icon: <SiKotlin />, name: "Kotlin", fill: "fill-[#6B57FF]" },
        {
          icon: <BiLogoPostgresql />,
          name: "PostgreSQL",
          fill: "fill-[#669AC4]",
        },
      ],
      description:
        "API que gestiona y brinda información de películas y series locales para usarse con Miteve Web",
      buttons: [
        {
          name: "Código",
          icon: <FaGithub />,
          href: "https://github.com/sh4dow18/miteve-api",
        },
      ],
    },
    {
      image: "nirit",
      title: "Nirit - Entorno Linux minimalista con gestión en mosaico",
      stack: [
        { icon: <SiGnubash />, name: "Bash", fill: "fill-white" },
        { icon: <FaPython />, name: "Python", fill: "fill-yellow-300" },
      ],
      description:
        "Entorno de escritorio para GNU/Linux enfocado en ventanas flotantes, pocos paquetes instalados y alta personalización",
      buttons: [
        {
          name: "Código",
          icon: <FaGithub />,
          href: "https://github.com/sh4dow18/nirit",
        },
      ],
    },
    {
      image: "braitec",
      title: "Braitec - Sitio oficial de soluciones tecnológicas",
      stack: [
        { icon: <RiNextjsFill />, name: "Next.js", fill: "fill-white" },
        {
          icon: <FaCss3Alt />,
          name: "CSS 3",
          fill: "fill-primary-light",
        },
        { icon: <SiTypescript />, name: "Typescript", fill: "fill-[#3178C6]" },
      ],
      description:
        "Sitio web oficial de Braitec: Soluciones Tecnológicas, que presenta sus servicios y soluciones tecnológicas para usuarios.",
      buttons: [
        {
          name: "Código",
          icon: <FaGithub />,
          href: "https://github.com/sh4dow18/braitec",
        },
        {
          name: "Deploy",
          icon: <HiOutlineRocketLaunch />,
          href: "https://braitec-cr.vercel.app",
        },
      ],
    },
  ];
  const STACK_LIST = [
    {
      title: "Frontend",
      style: "grid grid-cols-3",
      list: [
        {
          name: "Next.js",
          icon: <RiNextjsFill />,
          href: "https://nextjs.org",
          fill: "fill-black dark:fill-white",
        },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill />,
          href: "https://tailwindcss.com",
          fill: "fill-primary dark:fill-primary-light",
        },
        {
          name: "Typescript",
          icon: <SiTypescript />,
          href: "https://www.typescriptlang.org",
          fill: "fill-[#3178C6]",
        },
        {
          name: "CSS 3",
          icon: <FaCss3Alt />,
          href: "https://www.w3schools.com/css/",
          fill: "fill-primary dark:fill-primary-light",
        },
      ],
    },
    {
      title: "Backend",
      style: "grid grid-cols-3",
      list: [
        {
          name: "Spring",
          icon: <SiSpring />,
          href: "https://spring.io",
          fill: "fill-[#6DB33F]",
        },
        {
          name: "Kotlin",
          icon: <SiKotlin />,
          href: "https://kotlinlang.org",
          fill: "fill-[#6B57FF]",
        },
        {
          name: "Postgres",
          icon: <BiLogoPostgresql />,
          href: "https://www.postgresql.org",
          fill: "fill-[#669AC4]",
        },
      ],
    },
    {
      title: "Herramientas",
      style: "flex",
      list: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          href: "https://git-scm.com",
          fill: "fill-[#F05133]",
        },
        {
          name: "Github",
          icon: <FaGithub />,
          href: "https://github.com",
          fill: "fill-black dark:fill-white",
        },
        {
          name: "Bash",
          icon: <SiGnubash />,
          href: "https://www.gnu.org/software/bash/",
          fill: "fill-black dark:fill-white",
        },
        {
          name: "VSCode",
          icon: <VscVscode />,
          href: "https://code.visualstudio.com",
          fill: "fill-[#0069B9]",
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          href: "https://www.docker.com",
          fill: "fill-[#1D63ED]",
        },
        {
          name: "Vercel",
          icon: <IoLogoVercel />,
          href: "https://vercel.com",
          fill: "fill-black dark:fill-white",
        },
        {
          name: "Azure",
          icon: <VscAzure />,
          href: "https://azure.microsoft.com",
          fill: "fill-[#006DC1]",
        },
      ],
    },
  ];
  // Returns Portfolio Page
  return (
    // Portfolio Page Container
    <div className="flex flex-col gap-10 max-w-5xl mx-8 mt-20 md:mt-32 dark:text-gray-300">
      {/* Hero Container */}
      <section className="flex gap-5">
        {/* Hero Information Container */}
        <section className="flex flex-col gap-3 md:max-w-lg md:gap-5">
          {/* Pretitle information Container */}
          <div className="flex place-items-center gap-3">
            <Image
              src="/Ramses.webp"
              alt="Ramsés Profile Image"
              width={60}
              height={60}
              className="rounded-2xl md:hidden"
            />
            {/* Hero Badge */}
            <Link
              className="transition-all hover:scale-105"
              href="https://www.linkedin.com/in/ramsés-solano-arias-981029227/"
              target="_blank"
            >
              <div className="flex items-center">
                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                    Disponible para Trabajar
                  </div>
                </span>
              </div>
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Hola,{" "}
            <span className="text-primary dark:text-primary-light">
              soy Ramsés
            </span>
          </h1>
          {/* Ramsés Solano Description */}
          <p className="leading-7 md:text-lg md:leading-8">
            +1 año de experiencia.{" "}
            <strong className="text-yellow-600 dark:text-yellow-200">
              Diplomado en Programación de Aplicaciones Informáticas
            </strong>
            . Especializado en el{" "}
            <strong className="text-orange-700 dark:text-orange-300">
              Desarrollo de Aplicaciones Web
            </strong>
            , asi como liderazgo ágil y reparación de computadoras
          </p>
          {/* Hero Buttons Container */}
          <div className="flex flex-wrap gap-3">
            {HERO_BUTTONS_LIST.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                target="_blank"
                className="group flex gap-1 place-items-center w-fit px-3 py-2 rounded-full border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-50 dark:hover:text-black"
              >
                {cloneElement(button.icon, {
                  className:
                    "w-5 h-5 scale-90 fill-gray-900 group-hover:fill-gray-300 dark:fill-gray-300 dark:group-hover:fill-gray-900",
                })}
                <span>{button.label}</span>
              </Link>
            ))}
          </div>
        </section>
        {/* Profile Image Container */}
        <div className="hidden md:flex md:place-items-center">
          <Image
            src="/Ramses.webp"
            alt="Ramsés Profile Image"
            width={260}
            height={260}
            className="rounded-4xl"
          />
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="flex flex-col gap-7 place-content-center max-w-3xl"
      >
        {/* Experience Title Section */}
        <section className="flex gap-3">
          <BriefcaseIcon className="w-7 h-7" />
          <h2 className="font-semibold text-xl md:text-2xl">
            Experiencia Laboral
          </h2>
        </section>
        {/* Experience List */}
        <ol className="relative border-l border-gray-700 ml-3 pl-3">
          {EXPERIENCE_LIST.map((item, index) => (
            <li key={index} className="mb-12 ml-4">
              {/* Time Line Point */}
              <div className="absolute w-3 h-3 bg-primary-light rounded-full -left-1.5 mt-1.5" />
              {/* Information Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* First Section */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-semibold dark:text-primary-light">
                    {item.title}
                  </h3>
                  <span className="font-medium text-black dark:text-white">
                    {item.company}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item.date}
                  </span>
                </div>
                {/* Second Section */}
                <p className="text-sm leading-7 md:text-base md:col-span-2">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col gap-7 place-content-center max-w-3xl"
      >
        {/* Projects Title Section */}
        <section className="flex gap-3">
          <CodeBracketIcon className="w-7 h-7" />
          <h2 className="font-semibold text-xl md:text-2xl">Proyectos</h2>
        </section>
        {/* Projects List Container */}
        <div className="flex flex-col gap-10">
          {PROJECTS_LIST.map((project, index) => (
            // Project Card Container
            <article
              key={index}
              className="flex flex-wrap gap-6 md:flex-nowrap"
            >
              {/* Project Image */}
              <Image
                src={`/proyects/${project.image}.webp`}
                alt={`${project.image} Proyect Image`}
                width={400}
                height={300}
                className="rounded-xl border border-gray-700 w-full md:w-[400px]"
              />
              {/* Project Information Section */}
              <section className="flex flex-col gap-3 md:gap-2">
                {/* Project Title */}
                <h3 className="text-black font-semibold text-xl dark:text-white">
                  {project.title}
                </h3>
                {/* Project Stack */}
                <div className="flex gap-1">
                  {project.stack.map((tech, index2) => (
                    <div
                      key={index2}
                      className="flex place-items-center gap-1 w-fit bg-gray-800 text-white text-xs p-1 rounded-sm border border-gray-700"
                    >
                      {cloneElement(tech.icon, {
                        className: tech.fill,
                      })}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                {/* Project Description */}
                <p>{project.description}</p>
                {/* Project Buttons */}
                <div className="flex gap-2">
                  {project.buttons.map((button, index3) => (
                    <Link
                      key={index3}
                      href={button.href}
                      target="_blank"
                      className="group flex gap-1 place-items-center w-fit px-3 py-2 rounded-lg border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-50 dark:hover:text-black"
                    >
                      {cloneElement(button.icon, {
                        className:
                          "w-5 h-5 scale-90 fill-gray-900 group-hover:fill-gray-300 dark:fill-gray-300 dark:group-hover:fill-gray-900",
                      })}
                      <span>{button.name}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>
      {/* Stack Section */}
      <section
        id="stack"
        className="flex flex-col gap-7 place-content-center max-w-3xl"
      >
        {/* Stack Title Section */}
        <section className="flex gap-3">
          <FaCss3Alt className="w-7 h-7" />
          <h2 className="font-semibold text-xl md:text-2xl">Stack</h2>
        </section>
        {/* Stack List Container */}
        <div className="flex flex-wrap gap-5 place-content-center">
          {STACK_LIST.map((section, index) => (
            // Stack Container
            <section
              key={index}
              className="flex flex-col gap-3 w-full min-[816px]:w-fit"
            >
              {/* Stack Title */}
              <h3 className="font-semibold text-xl">{section.title}</h3>
              {/* Stack Cards List */}
              <div className="flex flex-wrap gap-3">
                {section.list.map((tech, index2) => (
                  // Stack Card Link
                  <Link
                    key={index2}
                    href={tech.href}
                    className="group flex flex-col place-content-center place-items-center gap-2 border border-gray-700 transition rounded-lg bg-gray-100 h-26 w-[45%] hover:scale-110 dark:bg-gray-900 min-[452px]:w-[30%] min-[816px]:w-24"
                  >
                    {/* Stack Icon */}
                    {cloneElement(tech.icon, {
                      className: `w-12 h-12 ${tech.fill}`,
                    })}
                    {/* Stack Name */}
                    <span className="font-medium text-sm group-hover:font-semibold group-hover:text-black dark:group-hover:text-white">
                      {tech.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
