// page.js (Documents/Server component)

import PinCard from "@/components/cards/PinCard";
import { getAssetPath } from "@/utils/getAssetPath";
import { getTranslations } from "locales/translations";
import Image from "next/image";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/documents`; 
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title: trans.metadata?.documents.title || 'Documentos y Preguntas Frecuentes – Vivol',
    description: trans.metadata?.documents.description || 'Encuentra documentos importantes, guías y respuestas a preguntas frecuentes sobre Vivol.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// DocumentsPage
export default async function DocumentsPage(props) {
    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
        <div className="documents-page">
            <h1>{trans.documents_page.title}</h1>

            <div className="documents-page__content">
                <Image 
                    src={getAssetPath("/images/photos/board.webp")}
                    alt="board background"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="documents-page__cards">
                    <PinCard
                        icon={getAssetPath("/images/icons/peru.png")}
                        text={trans.documents_page.national}
                        color="#355FB5"
                        doc="/docs/national-profile.pdf"
                    />
                    <PinCard
                        icon={getAssetPath("/images/icons/work.png")}
                        text={trans.documents_page.work}
                        color="#85AF59"
                        doc="/docs/work-profile.pdf"
                    />
                    <PinCard
                        icon={getAssetPath("/images/icons/faq.png")}
                        text={trans.documents_page.faq}
                        color="#D53686"
                        doc="/docs/FAQ.pdf"
                    />
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}