import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useBookStore } from "../services/store/useBookStore";
import Container from "../components/common/Container";
import BookCard from "../components/common/BookCard";
import ArrowRight from "../components/Icons/ArrowRight";
import ArrowLeft from "../components/Icons/ArrowLeft";
import SearchInput from "../components/common/SearchInput";
import LoadingIndicator from "../components/common/LoadingIndicator";
import ErrorIndicator from "../components/common/ErrorIndicator";
import NoBookIndicator from "../components/common/NoBookIndicator";

export default function Materials() {
  const { books, totalpages, error, loading, getFilterBooks } = useBookStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(Number(searchParams.get("page")) || 0);
  const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");

  useEffect(() => {
    getFilterBooks(searchValue, 20, page);
  }, [page]);

  useEffect(() => {
    let currentPage = Number(searchParams.get("page")) || 0;

    if (currentPage < 0) {
      currentPage = 0;
      setSearchParams({ search: searchValue, page: 0 });
    }

    if (totalpages && currentPage >= totalpages) {
      currentPage = totalpages - 1;
      setSearchParams({ search: searchValue, page: totalpages - 1 });
    }

    setPage(currentPage);
  }, [searchParams, totalpages]);

  const handleSearch = (e) => {
    e.preventDefault();
    getFilterBooks(searchValue, 20, 0);
    setPage(0);
    setSearchParams({ search: searchValue, page: 0 });
  };
  
  const handlePageChange = (newPage) => {
    setPage(newPage);
    setSearchParams({ search: searchValue, page: newPage });
    window.scrollTo({ top: 0 });
  };

  if (loading) return <LoadingIndicator className="min-h-screen" />;
  if (error) return <ErrorIndicator className="min-h-screen" />;
  if (!books) return <NoBookIndicator className="min-h-screen" />;

  return (
    <Container className="!my-0 py-10 max-w-7xl">
      <div className="flex justify-between items-center max-w-7xl mx-4 mb-7">
        <Link to={'/'}>
            <button
              className="hover:text-red-400 cursor-pointer"
            >
              <ArrowLeft />
            </button>
        </Link>

        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-bold">Material Consultado</h2>
          <span className="text-gray-800">
            Acceda a todo el material del Fondo Regional digitalizado, para usted
          </span>
        </div>
        <SearchInput
          onSubmit={handleSearch}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-4 place-items-center space-y-2">
        {books.length <= 0 ? (
          <NoBookIndicator className="min-h-80" />
        ) : (
          books?.map((book) => (
            <BookCard key={book.itemnumber} data={book} />
          ))
        )}
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="flex">
          <button
            disabled={page < 1}
            onClick={() => handlePageChange(page - 1)}
            className={`${page < 1 ? "text-gray-50 disabled:cursor-not-allowed" : ""} cursor-pointer flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700`}
          >
            <ArrowLeft />
            Anterior
          </button>
          <button
            disabled={totalpages <= page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={`${totalpages <= page + 1 ? "text-gray-50 disabled:cursor-not-allowed" : ""} cursor-pointer flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700`}
          >
            Siguiente
            <ArrowRight />
          </button>
        </div>
        <div>
          <span>{page + 1 || 0}</span> / <span>{totalpages || 1}</span>
        </div>
      </div>
    </Container>
  );
}
