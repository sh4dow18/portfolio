// Home Page Requirements
import Image from "next/image";
import { Badge, Button } from "./ui";
import { PAGES_BUTTONS_LIST, SOCIAL_BUTTONS_LIST } from "./config/buttons";
// Home Page Main Function
function HomePage() {
  return (
    <section className="flex flex-col gap-10 justify-center 2xl:h-full items-center">
      <div className="flex gap-5 justify-center items-center">
        {/* Hero Information Container */}
        <section className="flex flex-col gap-3 md:gap-5">
          {/* Pretitle information Container */}
          <div className="flex place-items-center gap-3">
            <Image
              src="/ramses-solano.webp"
              alt="Ramsés Profile Image"
              width={60}
              height={60}
              className="rounded-2xl xl:hidden"
            />
            {/* Hero Badge */}
            <Badge working={false} />
          </div>
          {/* Title */}
          <h1 className="text-3xl font-extrabold dark:text-gray-300 md:text-5xl">
            Hola, <span className="text-primary dark:text-primary-light">soy Ramsés</span>
          </h1>
          {/* Ramsés Solano Description */}
          <section className="flex flex-col gap-3 leading-8 dark:text-gray-300 md:max-w-3xl md:order-1 xl:text-lg">
            <p>
              Ingeniero en Sistemas de Información con{" "}
              <strong className="text-yellow-600 dark:text-yellow-200">
                experiencia en desarrollo full-stack, arquitectura en capas y despliegue de
                aplicaciones web en entornos productivos
              </strong>
              .{" "}
              <strong className="text-orange-700 dark:text-orange-300">
                Más de un año trabajando en proyectos reales
              </strong>{" "}
              con estándares profesionales.
            </p>
            <p>
              Graduado de la{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                Universidad Nacional de Costa Rica (UNA).
              </strong>{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                Lideré un equipo como Scrum Master,
              </strong>{" "}
              coordinando planificación, seguimiento y entrega de sistemas web y profesionales.
            </p>
            <p>
              Experiencia con{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                .NET 8, Spring Boot, Next.js y TypeScript
              </strong>
              , seguridad con{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                JWT y MFA, PostgreSQL
              </strong>{" "}
              y administración de{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                servidores Linux.
              </strong>{" "}
              Despliegues en Vercel, Render, Cloudflare R2 y servidores on-premise.
            </p>
            <p>
              Desarrollador de Mateory, una app web de matemáticas{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                documentada con Storybook y probado con Vitest
              </strong>
              , y Miteve, una{" "}
              <strong className="font-normal text-yellow-700 dark:text-yellow-200">
                plataforma de streaming
              </strong>{" "}
              tipo Netflix.
            </p>
          </section>
          {/* Hero Buttons Container */}
          <div className="flex flex-wrap gap-3">
            {SOCIAL_BUTTONS_LIST.map((button) => (
              <Button
                key={button.href}
                href={button.href}
                Icon={button.icon}
                title={button.title}
                newTab={button.newTab}
                label={button.label}
              />
            ))}
          </div>
        </section>
        {/* Profile Image Container */}
        <div className="hidden xl:flex md:place-items-center">
          <Image
            src="/ramses-solano.webp"
            alt="Ramsés Profile Image"
            width={550}
            height={550}
            className="rounded-2xl rotate-3 border-8 border-gray-300 ring-1 ring-black/70 dark:border-gray-800 dark:ring-white/40"
          />
        </div>
      </div>
      {/* Pages Buttons List Container */}
      <div className="flex flex-wrap gap-5 justify-center">
        {PAGES_BUTTONS_LIST.map((button) => (
          <Button
            key={button.href}
            href={button.href}
            Icon={button.icon}
            title={button.title}
            label={button.label}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
