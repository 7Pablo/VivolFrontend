// app/[lang]/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function LangLayout({ children, params }) {
  return (
    <html lang={params.lang}> 
      <body>
        <Navbar lang={params.lang} /> 
        <main>{children}</main>
      </body>
    </html>
  );
}