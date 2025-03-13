export default async function HomePage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 

  return (
    <div>
      <h1>{lang === "en" ? "Home" : "Inicio"}</h1>
    </div>
  );
}