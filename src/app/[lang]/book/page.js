// page.js (Book/Server component)

import BookForm from "@/components/BookForm";
import { getTranslations } from "locales/translations";

// Metadata
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params;
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}/book`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.book.title || 'Enviar una queja – Retroalimentación Vivol',
    description: trans.metadata?.book.description || '¿Tienes una queja? Envíala de forma segura a través de nuestro formulario.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// BookPage
export default async function BookPage(props) {
    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
        <div className="book-page">
          <h1 className="sr-only">{trans.book_page.title}</h1>
          <BookForm 
              data={trans.book_page}
              buttonText={trans.button.send}
          />
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}