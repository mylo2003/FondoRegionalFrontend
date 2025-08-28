import { Link } from "react-router";
import { useStatsStore } from "../../services/store/useStatsStore";
import { getNumbers } from "../../utils/ExtractNumber";

export default function BookCard({ data }) {
  const { addView } = useStatsStore();

  const cleanCode = getNumbers(data?.barcode);
  
  return (
    <Link
      to={`/libro/${data?.itemnumber}`}
      onClick={() => {
        window.scrollTo({ top: 0 });
        addView();
      }}
      className="w-72 bg-white rounded-lg shadow-lg border border-amber-200 p-4 hover:-translate-y-2 transition-transform"
    >
      <div className="bg-amber-500 h-1 rounded mb-4"></div>

      <div className="flex gap-3">
        <div className="w-24 h-52 bg-gradient-to-br from-amber-50 to-orange-50 rounded border-2 border-dashed border-amber-300 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-8 h-8 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          
          <img src={`/jpgs/${cleanCode}.jpg`} alt="" />
        </div>

        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-xs font-semibold text-amber-600 tracking-wide">
              Título
            </h3>
            <p className="text-sm font-bold text-gray-800 leading-tight">
              {data?.title?.replace(" /", "") || "Título no disponible"}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-amber-600 tracking-wide">
              Autor
            </h3>
            <p className="text-sm font-semibold text-gray-800">
              {data?.author || "Autor no especificado"}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-amber-600 tracking-wide">
              Biblioteca
            </h3>
            <p className="text-xs text-gray-800 leading-tight">
              {data?.branchname || "Biblioteca no especificada"}
            </p>
            <p className="text-xs text-gray-800 mt-2">
              {" "}
              {data?.branchcity || "Ciudad"},{" "}
              {data?.branchstate || "Departamento"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-amber-100 text-center">
        <span className="text-xs text-amber-600 font-light">
          Fondo Regional
        </span>
      </div>
    </Link>
  );
}
