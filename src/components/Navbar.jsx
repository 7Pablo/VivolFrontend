// Navbar.js (Server Component)

import Image from "next/image";
import NavbarItems from "./NavbarItems"; 
import { getTranslations } from "locales/translations";
import LanguageToggle from './LanguageToggle';

async function Navbar({ lang }) {
  const locale = lang || 'en';
  const trans = await getTranslations(locale);

  // Navbar items
  const navItems = [
    { label: trans.navbar.home, href: "/" },
    { label: trans.navbar.about, href: "/about" },
    { label: trans.navbar.volunteer, href: "/volunteer" },
    { label: trans.navbar.involve, href: "/involve" },
    { label: trans.navbar.contact, href: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Image
          src="/images/logo-azul.svg"
          alt="Logo de Vivol, Vida y Voluntariado"
          width={45}
          height={45}
          priority
          className="navbar__logo--world"
        />
        <div className="navbar__logo--text">
          <h1 className="navbar__logo--text-title">VIVOL</h1>
          <h2 className="navbar__logo--text-subtitle">Vida y Voluntariado</h2>
        </div>
      </div>
      <NavbarItems navItems={navItems} />
      <LanguageToggle />
    </div>
  );
}

export default Navbar;
