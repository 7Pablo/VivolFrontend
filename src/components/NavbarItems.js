// NavbarItems.js (Client Component)
"use client"; 

import { usePathname } from "next/navigation"; 
import Link from "next/link";

function NavbarItems({ navItems }) {
  const pathname = usePathname(); 
  const lang = pathname.startsWith("/en") ? "en" : "es"; 

  return (
    <ul className="navbar__items">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link href={`/${lang}${item.href}`}>
            <p
              className={`navbar__items--text${pathname === `/${lang}${item.href}` || (item.href === "/" && (pathname === `/${lang}` || pathname === `/`)) ? "-active" : ""}`} 
              data-hover={item.label}
            >
              {item.label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavbarItems;
