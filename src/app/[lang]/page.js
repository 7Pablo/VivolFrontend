// app/[lang]/page.js
export default async function HomePage({ params }) {
  const lang = params.lang || 'en';

  return (
    <div>
      <h1>{lang === "en" ? "Home" : "Inicio"}</h1>
    </div>
  );
}
