import '@/css/styles.css';
import { league_spartan, poppins } from '../../public/fonts/fonts'; 
import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children, params }) {
  const lang = params?.lang || 'es'; 

  return (
    <html 
      lang={lang} 
      className={`${league_spartan.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
