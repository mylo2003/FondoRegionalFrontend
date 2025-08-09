import { useEffect, useState } from "react";
import { instance } from "../services/api";
import Container from "../components/common/Container";
import BookCard from "../components/common/BookCard";
import ArrowRight from "../components/Icons/ArrowRight";
import ArrowLeft from "../components/Icons/ArrowLeft";
import SearchInput from "../components/common/SearchInput";

export default function Materials() {
  const [books, setBooks] = useState([]);
  const [pag, setPag] = useState(0); 

  async function getMaterial() {
    try {
      const response = await instance.get(`/fondo-regional?page=${pag}`);
      console.log(response);
      setBooks(response?.data?.content);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMaterial();
  }, [pag]);

  return (
    <Container className={"!my-0 py-10 max-w-7xl"}>
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-7">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-bold">Material Consultado</h2>
          <span className="text-gray-800 ">
            Acceda a todo el material del Fondo Regional digitalizado, para
            usted
          </span>
        </div>
        <SearchInput />
      </div>

      <div className="grid grid-cols-4 place-items-center space-y-2">
        {books.map((book) => (
          <BookCard key={book.itemnumber} data={book} />
        ))}
      </div>


      <div className="flex justify-center mt-5">
        <button 
          onClick={() => {
            setPag(pag - 1);   
            window.scrollTo({ top: 0 });
          }} 
          className="cursor-pointer flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-black/70 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
          <ArrowLeft />
          Anterior
        </button>
        <button 
          onClick={() => {
            setPag(pag + 1);   
            window.scrollTo({ top: 0 });
          }} 
        className="cursor-pointer flex items-center justify-center px-3 h-8 text-sm font-medium text-black/70 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
          Siguiente
          <ArrowRight />
        </button>
      </div>
    </Container>
  );
}
