// FooterItems.jsx (Client component)
'use client';

import { usePathname } from "next/navigation"; 
import Link from "next/link";

export default function FooterItems({ footItems }) {    
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    return (
        <ul className="footer__items">
          {footItems.map((item, index) => (
            <li key={index}>
              <Link href={`/${lang}${item.href}`}>
                <p className="footer__items--text">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      );
}
