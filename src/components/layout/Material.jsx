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
      <Container className={"!my-0 py-15  max-w-7xl"}>
        <div className="flex flex-col items-center gap-2 mb-5">
          <h2 className="text-4xl font-bold">Material Consultado</h2>
          <span className="">
            Acceda a todo el material del Fondo Regional digitalizado, para
            usted
          </span>
        </div>

        <div className="grid grid-cols-4 place-items-center">
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
