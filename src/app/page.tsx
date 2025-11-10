// Portfolio Page Requirements
import { ProjectButton } from "@/components";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
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
  FaPython,
} from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoLogoVercel } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiDotnet,
  SiGnubash,
  SiIntellijidea,
  SiKotlin,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
// Portfolio Page Main Function
export default async function Home({ searchParams }: Props) {
  // Page Language
  const LANGUAGE = (await searchParams).lang || "es";
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
      label: LANGUAGE === "es" ? "Correo Electrónico" : "E-Mail Address",
    },
    {
      href: "/docs/CV Ramses Solano Arias ES.pdf",
      icon: <FaFilePdf />,
      label: LANGUAGE === "es" ? "CV Español" : "Spanish CV",
    },
    {
      href: "/docs/CV Ramses Solano Arias EN.pdf",
      icon: <FaFilePdf />,
      label: LANGUAGE === "es" ? "CV Inglés" : "English CV",
    },
  ];
  const EXPERIENCE_LIST = [
    {
      title:
        LANGUAGE === "es"
          ? "Desarrollador Back-End (Práctica Profesional)"
          : "Back-End Developer (Professional Practice)",
      company: "Business Tech Integrated Services (BTIS)",
      date:
        LANGUAGE === "es"
          ? "Julio 2025 – Noviembre 2025"
          : "July 2025 – November 2025",
      description:
        LANGUAGE === "es"
          ? "Reestructuré desde cero usando Arquitectura en Capas e implementé buenas prácticas en la API RESTful del sistema “Portal de APIs” usando .NET 8, Postman y Visual Studio 2022. Implementé una validación de la autenticación multifactor (MFA) de Microsoft para el back-end en el Servicio de Inicio de Sesión para Usuarios de la Empresa. Optimicé la comunicación en tiempo real con WebSockets con el objetivo que el Front-end pudiera conocer cuando se hace una actualización con el back-end y actualice los datos. Creé un Servicio de Windows relacionado al sistema que verificara y actualizara la información diariamente sobre la documentación que maneja el programa. Desplegué el programa en un Windows Server con IIS para uso de la empresa."
          : "I restructured from scratch using Layered Architecture and implemented best practices in the “Portal de APIs” system’s RESTful API using .NET 8, Postman, and Visual Studio 2022. I implemented Microsoft’s Multi-Factor Authentication (MFA) validation for the back-end in the Company User Login Service. I optimized real-time communication with WebSockets to allow the front-end to detect back-end updates and refresh data accordingly. I developed a Windows Service related to the system to verify and update information daily regarding the program’s managed documentation. I deployed the program on a Windows Server with IIS for company use.",
    },
    {
      title: "Scrum Master",
      company: "Universidad de Costa Rica (UCR)",
      date:
        LANGUAGE === "es"
          ? "Marzo 2023 – Julio 2024"
          : "March 2023 - July 2024",
      description:
        LANGUAGE === "es"
          ? "Lideré un equipo de 5 desarrolladores, logrando crear un sistema web profesional reconocido como el mejor proyecto de Ingeniería en Sistemas de la generación 2023-2024. Diseñé el front-end con Next.js, TypeScript y PicoCSS, e implementé un back-end en SpringBoot con Spring Security y Kotlin Multiplataforma, integrando PostgreSQL. Documenté completamente el sistema, combinando formatos preexistentes y desarrollando nuevos. Desplegué entornos en la nube para pruebas con Render, Cloudflare R2, Vercel y un servidor on-prem con Ubuntu para producción."
          : "I led a team of 5 developers as a Scrum Master, successfully creating a professional web system recognized as the best Systems Engineering project of the 2023-2024 generation. I designed the front-end using Next.js, TypeScript, and PicoCSS, and implemented a back-end with Spring Boot, Spring Security, and Kotlin Multiplatform, integrating PostgreSQL. I fully documented the system, combining existing formats and developing new ones. I deployed cloud environments for testing using Render, Cloudflare R2, Vercel, and an on-prem server with Ubuntu for production",
    },
  ];
  const PROJECTS_LIST = [
    {
      name: "mateory",
      title: `Mateory - ${
        LANGUAGE === "es"
          ? "Resuelve inventarios y colas con modelos simples"
          : "Solve inventories and queues with simple models"
      }`,
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
        LANGUAGE === "es"
          ? "Resuelve problemas básicos de inventarios y colas con modelos matemáticos predefinidos y pocos clics en una app web."
          : "Solve basic inventory and queuing problems with predefined mathematical models and a few clicks in a web app.",
      github: "mateory",
      deploy: "https://mateory.vercel.app",
      docs: false,
    },
    {
      name: "miteve-web",
      title: `Miteve Web - ${
        LANGUAGE === "es"
          ? "Convierte tu contenido en un Netflix en casa"
          : "Turn your content into a Netflix at home"
      }`,
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
        LANGUAGE === "es"
          ? "Herramienta web para tener tu propio 'Netflix en casa' y ver contenido descargado desde un solo lugar por internet."
          : "A web tool for having your own 'Netflix at home' and watching downloaded content from a single location online.",
      github: "miteve-web",
      deploy: "https://miteve.vercel.app",
      docs: false,
    },
    {
      name: "miteve-api",
      title: `Miteve API - ${
        LANGUAGE === "es"
          ? "API que gestiona películas y series de Miteve"
          : "API that manages Miteve movies and series"
      }`,
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
        LANGUAGE === "es"
          ? "API que gestiona y brinda información de películas y series locales para usarse con Miteve Web"
          : "API that manages and provides information on local movies and series for use with Miteve Web",
      github: "miteve-api",
      deploy: null,
      docs: false,
    },
    {
      name: "nirit",
      title: `Nirit - ${
        LANGUAGE === "es"
          ? "Entorno Linux minimalista con gestión en mosaico"
          : "Minimalist Linux environment with tile management"
      }`,
      stack: [
        { icon: <SiGnubash />, name: "Bash", fill: "fill-white" },
        { icon: <FaPython />, name: "Python", fill: "fill-yellow-300" },
      ],
      description:
        LANGUAGE === "es"
          ? "Entorno de escritorio para GNU/Linux enfocado en ventanas en mosaico, pocos paquetes instalados y alta personalización"
          : "Desktop environment for GNU/Linux focused on tile windows, few installed packages, and high customization",
      github: "nirit",
      deploy: null,
      docs: false,
    },
    {
      name: "braitec",
      title: `Braitec - ${
        LANGUAGE === "es"
          ? "Sitio oficial de soluciones tecnológicas"
          : "Official website of technological solutions"
      }`,
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
        LANGUAGE === "es"
          ? "Sitio web oficial de 'Braitec: Soluciones Tecnológicas', que presenta sus servicios y soluciones tecnológicas para usuarios."
          : "'Braitec: Technological Solutions' official website, which presents its services and technological solutions for users.",
      github: "braitec",
      deploy: "https://braitec-cr.vercel.app",
      docs: false,
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
          name: ".NET",
          icon: <SiDotnet />,
          href: "https://dotnet.microsoft.com/es-es",
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
      title: LANGUAGE === "es" ? "Herramientas" : "Tools",
      style: "flex",
      list: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          href: "https://git-scm.com",
          fill: "fill-[#F05133]",
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
          name: "IntelliJ",
          icon: <SiIntellijidea />,
          href: "https://www.jetbrains.com/idea/",
          fill: "fill-black dark:fill-white",
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
  const EDUCATION_LIST = [
    {
      title:
        LANGUAGE === "es"
          ? "Bachillerato en Ingeniería en Sistemas de Información"
          : "Bachelor of Information Systems Engineering",
      company: "Universidad Nacional de Costa Rica (UNA)",
      date: LANGUAGE === "es" ? "Noviembre 2025" : "November 2025",
      degree: null,
    },
    {
      title:
        LANGUAGE === "es"
          ? "Diplomado de Programación de Aplicaciones Informáticas"
          : "Diploma in Computer Applications Programming",
      company: "Universidad Nacional de Costa Rica (UNA)",
      date: LANGUAGE === "es" ? "Noviembre 2023" : "November 2023",
      degree:
        "/degrees/Diplomado-en-Programacion-de-Aplicaciones-Informaticas-Ramses-Solano-Arias.webp",
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
                    {LANGUAGE === "es"
                      ? "Disponible para Trabajar"
                      : "Available to Work"}
                  </div>
                </span>
              </div>
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-3xl font-extrabold md:text-5xl">
            {LANGUAGE === "es" ? "Hola" : "Hello"},{" "}
            <span className="text-primary dark:text-primary-light">
              {LANGUAGE === "es" ? "soy Ramsés" : "I'm Ramsés"}
            </span>
          </h1>
          {/* Ramsés Solano Description */}
          <p className="leading-7 md:text-lg md:leading-8">
            +1{" "}
            {LANGUAGE === "es" ? "año de experiencia" : "years of experience"}.{" "}
            <strong className="text-yellow-600 dark:text-yellow-200">
              {LANGUAGE === "es"
                ? "Profesional en Programación de Aplicaciones Informáticas"
                : "Professional in Computer Applications Programming"}
            </strong>
            . {LANGUAGE === "es" ? "Especializado en el" : "Specialized in"}{" "}
            <strong className="text-orange-700 dark:text-orange-300">
              {LANGUAGE === "es"
                ? "Desarrollo de Aplicaciones Web"
                : "Web Application Development"}
            </strong>
            ,{" "}
            {LANGUAGE === "es"
              ? "asi como liderazgo ágil y reparación de computadoras"
              : "as well as agile leadership and computer repair"}
          </p>
          {/* Hero Buttons Container */}
          <div className="flex flex-wrap gap-3">
            {HERO_BUTTONS_LIST.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                target="_blank"
                className="group flex gap-1 place-items-center w-fit px-3 py-2 rounded-lg border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-50 dark:hover:text-black"
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
            {LANGUAGE === "es" ? "Experiencia Laboral" : "Work Experience"}
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
          <h2 className="font-semibold text-xl md:text-2xl">
            {LANGUAGE === "es" ? "Proyectos" : "Projects"}
          </h2>
        </section>
        {/* Projects List Container */}
        <div className="flex flex-col gap-10">
          {PROJECTS_LIST.map((project, index) => (
            // Project Card Container
            <article
              key={index}
              className="flex flex-wrap gap-6 min-[800px]:flex-nowrap"
            >
              {/* Project Image */}
              <Image
                src={`/proyects/${project.name}.webp`}
                alt={`${project.name} Proyect Image`}
                width={400}
                height={300}
                className="rounded-xl border border-gray-700 w-full min-[800px]:w-[400px]"
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
                <div className="flex flex-wrap gap-2">
                  <ProjectButton
                    href={`https://github.com/sh4dow18/${project.github}`}
                    icon={<FaGithub />}
                    name="Github"
                  />
                  {project.deploy !== null && (
                    <ProjectButton
                      href={project.deploy}
                      icon={<HiOutlineRocketLaunch />}
                      name="Deploy"
                    />
                  )}
                  {project.docs === true && (
                    <ProjectButton
                      href={`/${project.name}`}
                      icon={<DocumentIcon />}
                      name="Docs"
                    />
                  )}
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
      {/* About me Section */}
      <section
        id="about-me"
        className="flex flex-col gap-7 place-content-center max-w-3xl"
      >
        {/* About me Title Section */}
        <section className="flex gap-3">
          <UserIcon className="w-7 h-7" />
          <h2 className="font-semibold text-xl md:text-2xl">
            {LANGUAGE === "es" ? "Sobre mí" : "About Me"}
          </h2>
        </section>
        {/* About me Information Container */}
        <div className="flex flex-col gap-10 md:flex-row">
          {/* About me Information Image */}
          <div className="flex place-items-center place-content-center md:order-2">
            <Image
              src="/Ramses.webp"
              alt="Ramsés Profile Image"
              width={260}
              height={260}
              className="rounded-2xl rotate-3 border-8 border-gray-300 ring-1 ring-black/70 dark:border-gray-800 dark:ring-white/40"
            />
          </div>
          {/* About me Information Text Section */}
          <section className="flex flex-col gap-3 leading-6 md:max-w-lg md:order-1">
            <p>
              {LANGUAGE === "es"
                ? "Me llamo Ramsés y soy un apasionado por la tecnología, lo que me llevó a estudiar"
                : "My name is Ramsés and I am passionate about technology, which led me to study"}{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                {LANGUAGE === "es"
                  ? "Ingeniería en Sistemas de Información en la"
                  : "Information Systems Engineering in"}{" "}
                Universidad Nacional de Costa Rica (UNA)
              </strong>
              .
            </p>
            <p>
              {LANGUAGE === "es"
                ? "Tengo experiencia en desarrollo web"
                : "I have experience in web development"}
              ,{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                {LANGUAGE === "es"
                  ? "donde he liderado un proyecto real como Scrum Master, destacando por la organización, la calidad técnica y el trabajo en equipo"
                  : "where I have led a real project as a Scrum Master, standing out for the organization, technical quality and teamwork"}
              </strong>
              .
            </p>
            <p>
              {LANGUAGE === "es" ? "También" : "Also"}{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                {LANGUAGE === "es"
                  ? "he trabajado con servidores Linux, configuraciones de hosting y despliegues en plataformas como Vercel y Render"
                  : "I have worked with Linux servers, hosting configurations and deployments on platforms such as Vercel and Render"}
              </strong>
              .{" "}
              {LANGUAGE === "es"
                ? "Me gusta aprender constantemente, crear soluciones útiles y mejorar mis habilidades a través de proyectos personales."
                : "I enjoy constantly learning, creating useful solutions, and improving my skills through personal projects."}
            </p>
          </section>
        </div>
      </section>
      {/* Education Section */}
      <section
        id="education"
        className="flex flex-col gap-7 place-content-center max-w-3xl"
      >
        {/* Education Title Section */}
        <section className="flex gap-3">
          <AcademicCapIcon className="w-7 h-7" />
          <h2 className="font-semibold text-xl md:text-2xl">
            {LANGUAGE === "es" ? "Educación" : "Education"}
          </h2>
        </section>
        {/* Education List */}
        <ol className="relative border-l border-gray-700 ml-3 pl-3">
          {EDUCATION_LIST.map((item, index) => (
            <li key={index} className="mb-12 ml-4">
              {/* Time Line Point */}
              <div className="absolute w-3 h-3 bg-primary-light rounded-full -left-1.5 mt-1.5" />
              {/* Information Container */}
              <div className="flex flex-wrap gap-4">
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
                {/* Degree Section */}
                {item.degree !== null ? (
                  // If is already finished
                  <Link
                    href={item.degree}
                    target="_blank"
                    className="group flex gap-1 place-items-center w-fit h-fit px-3 py-2 rounded-lg border transition-all hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-50 dark:hover:text-black"
                  >
                    <PhotoIcon className="w-5 h-5 scale-90 fill-gray-900 group-hover:fill-gray-300 dark:fill-gray-300 dark:group-hover:fill-gray-900" />
                    <span>
                      {LANGUAGE === "es"
                        ? "Visualizar Certificado"
                        : "Visualize Degree"}
                    </span>
                  </Link>
                ) : (
                  // If it is not finished
                  <button className="flex gap-1 place-items-center w-fit h-fit px-3 py-2 rounded-lg border cursor-not-allowed text-gray-300 dark:text-gray-500 dark:bg-gray-700 dark:border-gray-500">
                    <PhotoIcon className="w-5 h-5 scale-90 fill-gray-300 dark:fill-gray-500" />
                    <span>
                      {LANGUAGE === "es"
                        ? "Visualizar Certificado"
                        : "Visualize Degree"}
                    </span>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
