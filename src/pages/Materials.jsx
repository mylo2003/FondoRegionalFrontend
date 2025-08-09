import { useEffect, useState } from "react";
import Container from "../components/common/Container";
import BookCard from "../components/common/BookCard";
import ArrowRight from "../components/Icons/ArrowRight";
import ArrowLeft from "../components/Icons/ArrowLeft";
import SearchInput from "../components/common/SearchInput";
import { useBookStore } from "../services/store/useBookStore";
import LoadingIndicator from "../components/common/LoadingIndicator";
import ErrorIndicator from "../components/common/ErrorIndicator";
import NoBookIndicator from "../components/common/NoBookIndicator";

export default function Materials() {
  const { books, totalpages, error, loading, getBooks } = useBookStore();
  const [page, setPage] = useState(0); 

  useEffect(() => {
    getBooks(20, page);
  }, [page]);

  if (loading) return <LoadingIndicator className='min-h-screen' />
  if (error) return <ErrorIndicator className='min-h-screen' />
  if (!books) return <NoBookIndicator className='min-h-screen' />

  return (
    <Container className={"!my-0 py-10 max-w-7xl"}>
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-7">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-bold">Material Consultado</h2>
          <span className="text-gray-800">
            Acceda a todo el material del Fondo Regional digitalizado, para
            usted
          </span>
        </div>
        <SearchInput />
      </div>

      <div className="grid grid-cols-4 place-items-center space-y-2">
        {books?.map((book) => (
          <BookCard key={book.itemnumber} data={book} />
        ))}
      </div>


      <div className="flex flex-col items-center mt-5">
        <div className="flex">
          <button 
            onClick={() => {
              setPage(page - 1);   
              window.scrollTo({ top: 0 });
            }} 
            className="cursor-pointer flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <ArrowLeft />
            Anterior
          </button>
          <button 
            onClick={() => {
              setPage(page + 1);   
              window.scrollTo({ top: 0 });
            }} 
          className="cursor-pointer flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            Siguiente
            <ArrowRight />
          </button>
        </div>
        <div>
          <span>{page + 1 || 0}</span> / 
          <span> {totalpages || 0}</span>
        </div>
      </div>
    </Container>
  );
}
