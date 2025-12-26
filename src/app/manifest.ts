// Manifest Requirements
import type { MetadataRoute } from "next";
// Manifest Main Function
export default function manifest(): MetadataRoute.Manifest {
  // Returns Manifest JSON File
  return {
    name: "Portfolio",
    short_name: "Portfolio",
    description:
      "Portafolio de Ramsés Solano Arias, donde se encuentran sus experiencias y proyectos.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
