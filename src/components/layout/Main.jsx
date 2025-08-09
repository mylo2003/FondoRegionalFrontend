import Container from "../common/Container";
import SearchInput from "../common/SearchInput";

export default function Main() {
  return (
    <main className="bg-[url(/FondoHemerografico.webp)] bg-contain bg-no-repeat mx-auto aspect-video">
      <Container className="max-w-5xl !mt-0 text-white font-semibold flex flex-col justify-center h-1/2">
        <div className="pb-5">
          <h1 className="text-8xl">Fondo Regional</h1>
          <h2 className="text-4xl font-normal">
            Material del Fondo Regional de Autores
          </h2>
        </div>
        <SearchInput />
      </Container>
    </main>
  );
}
