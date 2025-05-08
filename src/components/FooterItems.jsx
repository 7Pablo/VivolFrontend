// FooterItems.jsx (Client component)
'use client';

import { usePathname } from "next/navigation"; 
import Link from "next/link";

export default function FooterItems({ footItems, creditsLabel }) {    
    const pathname = usePathname(); 
    const lang = pathname.startsWith("/en") ? "en" : "es"; 

    return (
        <ul className="footer__nav--items">
          {footItems.map((item, index) => (
            <li key={index}>
              <Link href={`/${lang}${item.href}`}>
                <p className="footer__nav--item-text">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
          <li>
              {creditsLabel}
          </li>
        </ul>
      );
}
