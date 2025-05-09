// page.js (Book/Server component)

import BookForm from "@/components/BookForm";
import { getTranslations } from "locales/translations";

export default async function BookPage(props) {
    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
        <div className="book-page">
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