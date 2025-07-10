// Root Layout Stylesheets
import "./globals.css";
// Root Layout Requirements
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components";
// Root Layout Metadata
export const metadata: Metadata = {
  title: "Ramsés Solano",
  description: "Este es el Portafolio de Ramsés Solano",
};
// Root Layout Main Function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root Layout Constants
  const LOGOS_LIST = [
    { href: "https://github.com/sh4dow18/miteve-web", icon: "github" },
    { href: "https://opensource.org/license/mit", icon: "mit" },
  ];
  return (
    <html lang="en">
      <body className="flex flex-col h-dvh font-inter bg-gray-100">
        {/* Light */}
        <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        {/* Header Container */}
        <header className="fixed top-0 z-10 flex place-content-between w-full mx-auto">
          <Nav />
        </header>
        {/* Main Content Container */}
        <main className="flex flex-1">{children}</main>
        {/* Informative Footer */}
        <footer className="text-center py-8 dark:text-gray-300 sm:flex sm:place-content-between sm:items-center sm:px-8">
          {/* Logos Container */}
          <div className="flex gap-4 justify-center max-w-fit mx-auto mb-5 sm:order-3 sm:m-0">
            {LOGOS_LIST.map((logo, index) => (
              <Link key={index} href={logo.href} target="_blank">
                {/* Logo Image */}
                <Image
                  src={`/logos/${logo.icon}.svg`}
                  alt={`${logo.icon} logo`}
                  width={24}
                  height={24}
                  className="filter brightness-0 hover:brightness-50 dark:brightness-100 dark:hover:brightness-150"
                  priority
                />
              </Link>
            ))}
          </div>
          {/* Copyright Text */}
          <p className="text-xs sm:order-2 md:text-sm">
            ©{" "}
            <Link
              href="https://github.com/sh4dow18"
              target="_blank"
              className="hover:text-primary"
            >
              Ramsés Solano
            </Link>
          </p>
          {/* Last Update */}
          <p className="text-xs sm:order-1 md:text-sm">09 de Julio del 2025</p>
        </footer>
      </body>
    </html>
  );
}
