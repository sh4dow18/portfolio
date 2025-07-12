// Set this component as a client component
"use client";
// Nav Requirements
import { useEffect, useRef, useState } from "react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import Image from "next/image";
// Nav Main Function
function Nav() {
  // Nav Hooks
  const [open, SetOpen] = useState<boolean>(false);
  const [language, SetLanguage] = useState<"es" | "en">("es");
  const menuRef = useRef<HTMLDivElement>(null);
  // Nav Pages List to use in Mobile Nav and Desktop Nav
  const NAV_PAGES_LIST = [
    { href: "#experience", name: "Experiencia" },
    { href: "#projects", name: "Proyectos" },
    { href: "#stack", name: "Stack" },
    { href: "#about-me", name: "Sobre mí" },
    { href: "#achievements", name: "Logros" },
    { href: "#contact", name: "Contacto" },
  ];
  // Execute this use effect to close the menu when clicking outside it
  useEffect(() => {
    const ClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        menuRef.current.contains(event.target as Node) === false
      ) {
        SetOpen(false);
      }
    };
    document.addEventListener("click", ClickOutside);
    return () => {
      document.removeEventListener("click", ClickOutside);
    };
  }, [menuRef]);
  // Function that Sets the Opposite Value in Open Hook to Open and Close the Burger Menu
  const OnClickButton = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => SetOpen(!open));
    } else {
      SetOpen(!open);
    }
  };
  // Function that Sets or Removes Dark Styles in Document Element
  const ChangeTheme = () => {
    const DOCUMENT_CLASS_LIST = document.documentElement.classList;
    if (DOCUMENT_CLASS_LIST.contains("dark") === true) {
      DOCUMENT_CLASS_LIST.remove("dark");
      return;
    }
    DOCUMENT_CLASS_LIST.add("dark");
  };
  // Returns Nav Component
  return (
    <nav className="w-full min-[1035px]:flex min-[1035px]:place-content-center">
      <div
        ref={menuRef}
        className="p-2 grid grid-cols-3 gap-10 items-center relative min-[1035px]:flex min-[1035px]:px-6"
      >
        {/* Burger Menu Button to Mobile Nav */}
        <button
          className="w-10 h-10 place-content-center rounded-md dark:text-gray-300 focus:outline-hidden focus:ring-2 focus:ring-white min-[1035px]:hidden"
          onClick={OnClickButton}
        >
          {/* If the burger menu is closed, it shows the bars icon; if open, shows the X Mark icon */}
          <Bars3Icon
            className={`w-7 mx-auto ${open ? "hidden" : ""}`.trimEnd()}
          />
          <XMarkIcon
            className={`w-7 mx-auto ${open ? "" : "hidden"}`.trimEnd()}
          />
        </button>
        <Link href="/" className="text-center min-[1035px]:m-3">
          {/* Ramses Solano Name */}
          <span className="hidden font-semibold text-sm transition-all text-primary dark:text-primary-light hover:text-xl min-[490px]:block min-[490px]:text-lg">
            Ramsés Solano
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden min-[1035px]:block">
          {NAV_PAGES_LIST.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="mx-2 px-3 py-2 rounded-md select-none transition-all hover:text-black hover:bg-gray-200 dark:text-white dark:font-semibold dark:hover:text-white dark:hover:bg-gray-700"
            >
              {page.name}
            </Link>
          ))}
        </div>
        {/* Buttons Container */}
        <div className="justify-self-end flex gap-5">
          <SunIcon
            className="w-7 h-7 cursor-pointer transition-all hover:scale-125 dark:hidden"
            onClick={ChangeTheme}
          />
          <MoonIcon
            className="hidden w-7 h-7 cursor-pointer transition-all hover:scale-125 dark:block dark:fill-gray-300"
            onClick={ChangeTheme}
          />
          <Image
            src="/logos/espanol.svg"
            alt="Español Logo"
            width={24}
            height={24}
            priority
            className={`w-7 py-1 rounded-md cursor-pointer select-none transition-all hover:scale-125 ${
              language === "es" ? "block" : "hidden"
            }`}
            onClick={() => SetLanguage("en")}
          />
          <Image
            src="/logos/english.svg"
            alt="English Logo"
            width={24}
            height={24}
            priority
            className={`w-7 rounded-md cursor-pointer select-none transition-all hover:scale-125 ${
              language === "en" ? "block" : "hidden"
            }`}
            onClick={() => SetLanguage("es")}
          />
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`flex flex-col absolute w-full py-2 z-20 bg-gray-100 text-black dark:bg-gray-900 dark:text-white min-[1035px]:hidden ${
          open ? "" : "hidden"
        }`.trimEnd()}
      >
        {NAV_PAGES_LIST.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            onClick={() => SetOpen(false)}
            className="mx-2 my-1 px-3 py-2 font-medium"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
