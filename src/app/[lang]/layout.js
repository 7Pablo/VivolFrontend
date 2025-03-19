// app/[lang]/layout.js (LangLayout)
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function LangLayout(props) {
  const params = await props.params; 
  const lang = params?.lang || 'es'; 

  return (
    <>
      <Navbar lang={lang} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
