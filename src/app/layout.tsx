// Main Layout Stylesheets
import "./globals.css";
// Main Layout Requirements
import type { Metadata } from "next";
import { Footer, Header } from "@/shared/ui";
import { SidebarNav } from "@/widgets/navigation/ui";
// Main Layout Metadata
export const metadata: Metadata = {
  title: {
    default: "Ramsés Solano Portfolio",
    template: "%s | Ramsés Solano Portfolio",
  },
  description:
    "Portafolio de Ramsés Solano Arias, donde se encuentran sus experiencias y proyectos.",
  keywords: ["portfolio", "portafolio", "proyectos", "trabajos"],
};
// Main Layout Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col h-screen bg-gray-50 overflow-hidden font-inter dark:bg-gray-950 high-contrast:bg-white">
        <Header />
        <div className="flex flex-1 h-[calc(100svh-69px-81px)] overflow-hidden">
          <SidebarNav />
          <main className="flex-1 overflow-y-auto space-y-8 py-8 px-4 md:px-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
