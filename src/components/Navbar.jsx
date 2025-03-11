// Navbar.js (Server Component)

import Image from "next/image";
import NavbarItems from "./NavbarItems"; 

function Navbar() {
  // Navbar items
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/about" },
    { label: "Voluntariado", href: "/volunteer" },
    { label: "Involúcrate", href: "/involve" },
    { label: "Contacto", href: "/contact" },
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
    </div>
  );
}

export default Navbar;
