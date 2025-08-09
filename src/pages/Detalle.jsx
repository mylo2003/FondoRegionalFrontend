import { useMemo } from "react";
import { useParams } from "react-router";
import { useBookStore } from "../services/store/useBookStore";

export default function Detalle() {
  const { id } = useParams();
  const { books } = useBookStore();

  const selectedBook = useMemo(() => {
    return books.find(book => book?.itemnumber == id) || null;
  }, [books, id]);

  console.log(selectedBook);

  if (!selectedBook) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="bg-green-500 h-20">
      <h1>{}</h1>
      <img src='' alt='' />
      <p>{}</p>
      <div className=""></div>
    </div>
  );
}
