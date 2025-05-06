// Navbar.js (Server Component)

import NavbarItems from "./NavbarItems"; 
import { getTranslations } from "locales/translations";
import HamDropdown from "./buttons/HamDropdown";
import LanguageButton from "./buttons/LanguageButton";
import NavbarButton from "./buttons/NavbarButton";

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
      <div className="navbar__content">
        <NavbarButton />
        <NavbarItems navItems={navItems} />
        <div className="navbar__language">
          <LanguageButton lang={locale}/>
        </div>
        <HamDropdown navItems={navItems}/>
      </div>
    </div>
  );
}

export default Navbar;
