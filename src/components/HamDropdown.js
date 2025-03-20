"use client";

import { Menu } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import LanguageButton from "./LanguageButton";

export default function HamDropdown({ navItems }) {
  const pathname = usePathname(); 
  const lang = pathname.startsWith("/en") ? "en" : "es"; 

  return (
    <div className="ham-dropdown">
      <Menu.Root>
        <Menu.Trigger asChild>
            <button className="ham-dropdown__button">
              <FaBars className="ham-dropdown__icon" size={30}/>
            </button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="ham-dropdown__content">
            <div>
              {navItems.map((item, index) => (
                <div key={index} className="ham-dropdown__item">
                  <Link href={`/${lang}${item.href}`}>
                    <Menu.Item>{item.label}</Menu.Item>
                  </Link>
                </div>
              ))}
            </div>
            <LanguageButton lang={lang}/>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
