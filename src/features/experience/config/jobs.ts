// Jobs Types
type Job = {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
};
// Jobs List
export const JOBS_LIST: Job[] = [
  {
    id: 1,
    title: "Desarrollador Back-End (Práctica Profesional)",
    company: "Business Tech Integrated Services (BTIS)",
    date: "Julio 2025 – Noviembre 2025",
    description:
      "Reestructuré desde cero usando Arquitectura en Capas e implementé buenas prácticas en la API RESTful del sistema “Portal de APIs” usando .NET 8, Postman y Visual Studio 2022. Implementé una validación de la autenticación multifactor (MFA) de Microsoft para el back-end en el Servicio de Inicio de Sesión para Usuarios de la Empresa. Optimicé la comunicación en tiempo real con WebSockets con el objetivo que el Front-end pudiera conocer cuando se hace una actualización con el back-end y actualice los datos. Creé un Servicio de Windows relacionado al sistema que verificara y actualizara la información diariamente sobre la documentación que maneja el programa. Desplegué el programa en un Windows Server con IIS para uso de la empresa.",
  },
  {
    id: 2,
    title: "Scrum Master",
    company: "Universidad de Costa Rica (UCR)",
    date: "Marzo 2023 – Julio 2024",
    description:
      "Lideré un equipo de 5 desarrolladores, logrando crear un sistema web profesional reconocido como el mejor proyecto de Ingeniería en Sistemas de la generación 2023-2024. Diseñé el front-end con Next.js, TypeScript y PicoCSS, e implementé un back-end en SpringBoot con Spring Security y Kotlin Multiplataforma, integrando PostgreSQL. Documenté completamente el sistema, combinando formatos preexistentes y desarrollando nuevos. Desplegué entornos en la nube para pruebas con Render, Cloudflare R2, Vercel y un servidor on-prem con Ubuntu para producción.",
  },
];
