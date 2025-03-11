import '@/css/styles.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { league_spartan, poppins } from '../../public/fonts/fonts'; 

// RootLayout always has the html and body tags
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${league_spartan.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}