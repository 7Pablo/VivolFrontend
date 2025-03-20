// LanguageButton.jsx (Client component)
"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "locales/translations";
import { useState, useEffect } from "react";

export default function LanguageButton({ lang }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [trans, setTrans] = useState({
    alt: { language_change: "" },
    button: { language_text: "" },
  });

  useEffect(() => {
    async function fetchTranslations() {
        const translations = await getTranslations(lang);
        setTrans(translations);
    }
    fetchTranslations();
  }, [lang]);

  const toggleLang = lang === "en" ? "es" : "en";
  const newHref = pathname.replace(`/${lang}`, `/${toggleLang}`);

  const handleLanguageChange = () => {
    router.push(newHref);
  };

  return (
    <div className="language-button" onClick={handleLanguageChange}>
        <Image
          src={lang === "en" ? "/images/espanol.svg" : "/images/ingles.svg"}
          alt={trans.alt.language_change}
          width={32}
          height={32}
          priority
          className="language-button__icon"
        />
        <span className="language-button__text">{trans.button.language_text}</span>
    </div>
  );
}
