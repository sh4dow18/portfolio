// Portfolio Page Requirements
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
                  <h3 className="text-primary-light font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-white font-medium">{item.company}</span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                {/* Second Section */}
                <p className="text-gray-300 text-sm md:text-base md:col-span-2">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
