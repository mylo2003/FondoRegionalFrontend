import { useEffect, useState } from "react";
import Material from "../components/layout/Material";
import { instance } from "../services/api";
import Container from "../components/common/Container";
import BookCard from "../components/common/BookCard";
import Button from "../components/common/Button";
import ArrowRight from "../components/Icons/ArrowRight";
import ArrowLeft from "../components/Icons/ArrowLeft";

export default function Materials() {
  const [books, setBooks] = useState([]);

  async function getMaterial() {
    try {
      const response = await instance.get("/fondo-regional");
      console.log(response);
      setBooks(response?.data?.content);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMaterial();
  }, []);

  return (
    <Container className={"!my-0 py-10 max-w-7xl"}>
      <div className="flex flex-col gap-2 mb-5 ml-5">
        <h2 className="text-4xl font-bold">Material Consultado</h2>
        <span className="text-gray-800 ">
          Acceda a todo el material del Fondo Regional digitalizado, para
          usted
        </span>
      </div>

      <div className="grid grid-cols-4 place-items-center space-y-2">
        {books.map((book) => (
          <BookCard key={book.itemnumber} data={book} />
        ))}
      </div>


      <div className="flex justify-center mt-5">
        <a href="#" className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-black/70 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
          <ArrowLeft />
          Anterior
        </a>
        <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-black/70 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
          Siguiente
          <ArrowRight />
        </a>
      </div>
    </Container>
  );
}
