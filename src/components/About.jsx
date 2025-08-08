import Button from "./Button";
import Container from "./Container";

export default function About() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-10">
        <img className="rounded-2xl" src="../../public/FondoBibliografico.webp" alt="" />
        <div className="flex flex-col gap-4 px-10">
          <h3 className="text-5xl text-balance font-semibold">Conoce el proyecto del fondo regional</h3>
          <p className="text-pretty">
            Conoce cómo se desarrolló todo el proyecto que hoy nos permite
            traerles todo los contenidos digitales a su servicio.
          </p>
          <div className="mt-5">
            <Button href={"#"} text={"Explorar"} />
          </div>
        </div>
      </div>
    </Container>
  );
}
