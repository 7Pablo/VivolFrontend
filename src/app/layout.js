import '@/css/styles.css';
import { varelaRound, montserrat } from '../../public/fonts/fonts';
import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children, params }) {
  const lang = params?.lang || 'es'; 

  return (
    <html 
      lang={lang} 
      className={`${varelaRound.variable} ${montserrat.variable}` }
      suppressHydrationWarning
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
