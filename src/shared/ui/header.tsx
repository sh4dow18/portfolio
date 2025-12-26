// Header Requirements
import { DrawerNav } from "@/widgets/navigation/ui";
import Link from "next/link";
import { AccessibilityMenu } from "@/widgets/accessibility/ui";
// Header Main Function
function Header() {
  // Return Header Component
  return (
    <header className="bg-gray-50 px-4 py-5 flex items-center place-content-between border-b border-gray-400/50 dark:bg-gray-950 high-contrast:bg-white high-contrast:border-black">
      {/* Header Main Header */}
      <div className="flex">
        {/* Drawer Menu */}
        <DrawerNav />
        {/* Mateory Logo */}
        <Link href="/" title="Inicio" className="ml-5 text-2xl font-bold italic dark:text-gray-50">
          Ramsés <span className="text-primary dark:text-primary-light">Solano</span>
        </Link>
      </div>
      {/* Accessibility menu */}
      <AccessibilityMenu />
    </header>
  );
}

export default Header;
