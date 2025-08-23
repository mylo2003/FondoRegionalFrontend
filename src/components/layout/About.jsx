import Button from "../common/Button";
import Container from "../common/Container";

export default function About() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 px-10 md:px-0">
        <img className="rounded-2xl" src="/FondoBibliografico.webp" alt="" />
        <div className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-2xl md:text-5xl text-balance font-semibold">
            Conoce el proyecto del Fondo Regional
          </h3>
          <p className="text-pretty text-sm md:text-base">
            Conoce cómo se desarrolló todo el proyecto que hoy nos permite
            traerles todo los contenidos digitales a su servicio.
          </p>
          <div className="mt-5 mx-auto md:mx-0">
            <Button href={"#"} text={"Explorar"} />
          </div>
        </div>
      </div>
    </Container>
  );
}
