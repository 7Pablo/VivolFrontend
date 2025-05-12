"use client";

import { Menu } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LanguageButton from "./LanguageButton";
import { useState } from "react";
import { getAssetPath } from "@/utils/getAssetPath";

export default function HamDropdown({ navItems }) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ham-dropdown">
      <Menu.Root onOpenChange={(e) => setIsOpen(e.open)}>
        <Menu.Trigger asChild>
          <button className={`ham-dropdown__button ${isOpen ? "is-open" : ""}`}>
            <Image
              src={getAssetPath("/images/icons/menu.svg")}
              alt="Menu icon"
              height={30}
              width={30}
              className="menu-icon"
            />
          </button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className="ham-dropdown__content">
            <div>
              {navItems.map((item, index) => (
                <div key={index} className="ham-dropdown__item">
                  <Link href={`/${lang}${item.href}`}>
                    <Menu.Item>
                      <p
                        className={`ham-dropdown__item${
                          pathname === `/${lang}${item.href}` ||
                          (item.href === "/" &&
                            (pathname === `/${lang}` || pathname === `/`))
                            ? "-active"
                            : ""
                        }`}
                      >
                        {item.label}
                      </p>
                    </Menu.Item>
                  </Link>
                </div>
              ))}
            </div>
            <LanguageButton lang={lang} />
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
