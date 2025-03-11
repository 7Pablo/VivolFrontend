// NavbarItems.js (Client Component)
"use client"; 

import { usePathname } from "next/navigation"; 
import Link from "next/link"; 

function NavbarItems({ navItems }) {
  // Get the current route
  const pathname = usePathname(); 

  return (
    <ul className="navbar__items">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <p
              className={`navbar__items--text${pathname === item.href ? "-active" : ""}`} 
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
