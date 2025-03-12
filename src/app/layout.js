// app/layout.js (Global layout for the whole app)
import '@/css/styles.css';
import { league_spartan, poppins } from '../../public/fonts/fonts'; 

export default async function RootLayout({ children, params }) {
  const lang = params?.lang || 'es';

  return (
    <html lang={lang} className={`${league_spartan.variable} ${poppins.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}