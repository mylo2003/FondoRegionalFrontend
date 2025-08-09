import Button from "../common/Button";
import Container from "../common/Container";

export default function Category() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-2 mb-5">
        <h2 className="text-4xl font-bold">Categorías</h2>
        <span className="text-black/70 ">
          Busca material digital del Fondo Regional por categoría
        </span>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-10">
        <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
          Romance
        </div>
        <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
          Romance
        </div>
        <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
          Romance
        </div>
        <div className="w-60 h-48 flex justify-center items-center bg-gray-300 rounded-xl">
          Romance
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Button href={'#'} text={'Ver todas las categorías'}/>
      </div>
    
    </Container>
  );
}
