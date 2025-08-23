import { useEffect } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import BookCard from "../common/BookCard";
import { useBookStore } from "../../services/store/useBookStore";
import LoadingIndicator from "../common/LoadingIndicator";
import ErrorIndicator from "../common/ErrorIndicator";
import NoBookIndicator from "../common/NoBookIndicator";

export default function Material() {
  const { books, error, loading, getBooks } = useBookStore();

  useEffect(() => {
    getBooks(4, 0);
  }, []);

  return (
    <div id="material" className="">
      <Container className={"!my-0 pt-5 md:py-15 px-10 md:px-0 max-w-7xl"}>
        <div className="flex flex-col md:items-center gap-2 mb-5">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Material Consultado</h2>
          <span className="text-sm md:text-base text-center md:text-left">
            Acceda a todo el material del Fondo Regional digitalizado, para
            usted
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {loading ? (
            <LoadingIndicator className="min-h-60" />
          ) : error ? (
            <ErrorIndicator className="min-h-60" />
          ) : !books ? (
            <NoBookIndicator className="min-h-60" />
          ) : (
            books.map((book) => <BookCard key={book.itemnumber} data={book} />)
          )}
        </div>

        <div className="flex justify-center my-10">
          <Button
            disabled={error || loading || !books}
            href="/material"
            text={"Ver todo el material"}
          />
        </div>
      </Container>
    </div>
  );
}
