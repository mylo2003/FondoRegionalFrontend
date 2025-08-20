import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { User, Eye, ChevronLeft } from "lucide-react";
import { useBookStore } from "../services/store/useBookStore";
import Container from "../components/common/Container";
import NoBookIndicator from "../components/common/NoBookIndicator";
import Button from "../components/common/Button";
import Restricted from "../components/modal/Restricted";
import { jwtDecode } from "jwt-decode";

export default function Detail() {
  const { id } = useParams();
  const { books } = useBookStore();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [openModal, setOpenModal] = useState(false);

  const selectedBook = useMemo(() => {
    return books.find((book) => book?.itemnumber == id) || null;
  }, [books, id]);

  if (!selectedBook) {
    return <NoBookIndicator className="min-h-screen" />;
  }

  const isAvailable = () => {
    try {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        return false;
      }

      if (!decoded.role) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  const restrictedBook =
    selectedBook?.restricted === 1 && !isAvailable() ? true : false;

  return (
    <Container className={"!my-4"}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            className="hover:text-red-400 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </button>
          <h2 className="text-3xl font-bold">
            Libro Consultado #{selectedBook.itemnumber}
          </h2>
        </div>
        <div className="flex items-center gap-5 text-right">
          {restrictedBook && (
            <span className="leading-4">
              Debes acercarte a nuestra biblioteca <br /> para acceder a este
              libro
            </span>
          )}
          <Button
            onClick={() => {
              if (restrictedBook) return setOpenModal(!openModal);
            }}
            style="!text-sm !py-2 !px-4"
            href="#"
            text="Ver pdf"
          />
        </div>
      </div>

      <article className="mt-4 h-full mx-auto bg-white rounded-xl shadow-xl border border-amber-200 overflow-hidden">
        <div className="bg-amber-500 h-2"></div>
        <div className="p-6">
          <div className="grid grid-cols-3 grid-rows-4 gap-3">
            <div className="row-span-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-dashed border-amber-300 flex flex-col items-center justify-center flex-shrink-0 shadow-inner">
              <svg
                className="w-24 h-24 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-xs font-semibold text-amber-600 tracking-wide mb-2">
                TÍTULO
              </h3>
              <p className="text-lg font-semibold text-gray-800 leading-tight">
                {selectedBook?.title?.replace(" /", "") ||
                  "Título no disponible"}
              </p>
            </div>

            <div className="row-span-2 bg-orange-50 rounded-lg p-4 border border-amber-200">
              <span className="text-xs font-semibold text-amber-600 tracking-wide block mb-2">
                DESCRIPCIÓN
              </span>
              {selectedBook?.abstractText ? (
                <p className="text-sm text-gray-800 leading-relaxed">
                  {selectedBook.abstractText}
                </p>
              ) : (
                <p className="text-sm text-gray-800">Resumen no disponible</p>
              )}
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-amber-200">
              <h4 className="text-xs font-semibold text-amber-600 tracking-wide mb-1">
                AUTOR
              </h4>
              <p className="text-sm text-gray-800">
                {selectedBook?.author || "Autor no especificado"}
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-amber-200 ">
              <span className="text-xs font-semibold text-amber-600 tracking-wide block mb-1">
                EDITORIAL
              </span>
              <p className="text-sm text-gray-800">
                {selectedBook?.publishercode?.trim() ||
                  "Editorial no especificada"}
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-amber-200">
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-semibold text-amber-600 tracking-wide block">
                    EDICIÓN
                  </span>
                  <p className="text-sm text-gray-800 capitalize">
                    {selectedBook?.editionstatement ||
                      "Edición no escecíficada"}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-amber-600 tracking-wide block">
                      PÁGINAS / VOLUMEN
                    </span>
                    <p className="text-gray-800">
                      {selectedBook?.pages || "N/A"}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-amber-600 tracking-wide block">
                      TAMAÑO
                    </span>
                    <p className="text-gray-800">
                      {selectedBook?.size || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-amber-200">
              <div>
                <span className="text-xs font-semibold text-amber-600 tracking-wide block mb-1">
                  BIBLIOTECA
                </span>
                <p className="text-sm text-gray-800">
                  {selectedBook?.branchname || "Biblioteca no especificada"}
                </p>
                <p className="text-xs text-gray-800 mt-1">
                  {selectedBook?.branchcity || "Ciudad"},{" "}
                  {selectedBook?.branchstate || "Departamento"}
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-amber-200">
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-semibold text-amber-600 tracking-wide block">
                    ÍTEM
                  </span>
                  <p className="text-sm text-gray-800">
                    {selectedBook?.itemnumber || "No disponible"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-xs font-semibold text-amber-600 tracking-wide block">
                      ISBN
                    </span>
                    <p className="text-sm text-gray-800">
                      {selectedBook?.isbn || "No disponible"}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-amber-600 tracking-wide block">
                      BARCODE
                    </span>
                    <p className="text-gray-800 uppercase">
                      {selectedBook?.barcode || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-amber-200 text-center">
            <span className="text-sm text-amber-600">Fondo Regional</span>
          </div>
        </div>
      </article>
      {openModal && (
        <Restricted
          book={selectedBook}
          onClose={() => setOpenModal(!openModal)}
        />
      )}
    </Container>
  );
}
