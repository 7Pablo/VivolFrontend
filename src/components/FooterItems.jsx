// FooterItems.jsx (Client component)
'use client';

import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { Dialog, Portal  } from "@chakra-ui/react"
import Image from "next/image";
import CreditsCard from "./cards/CreditsCard";
import { getAssetPath } from "@/utils/getAssetPath";

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
          {/* Credits Dialog */}
          <Dialog.Root>
            <Dialog.Trigger>
              <li>
                {creditsLabel}
              </li>
            </Dialog.Trigger>

            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content data-dialog-type="credits">
                  <Dialog.CloseTrigger asChild>
                      <div className="credits-card__close">
                          <Image
                              src={getAssetPath("/images/icons/close.svg")}
                              alt="x"
                              width={100}
                              height={100}
                              priority
                          />
                      </div>
                  </Dialog.CloseTrigger>
                  <CreditsCard
                    imgSrc={getAssetPath("/images/photos/juanpablo.jpg")}
                    title={creditsLabel}
                    name="Juan Pablo Armendáriz"
                    email="juanpaarmendariz3@gmail.com"
                    linkedin="www.linkedin.com/in/juanarmendariz/"
                    number="+593 98 663 3752"
                    github="github.com/7Pablo"
                  />
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </ul>
      );
}
