export default function BookCard({ data }) {
  return (
    <a
      href="#"
      className="w-72 bg-white rounded-lg shadow-lg border border-amber-200 p-4 hover:-translate-y-2 transition-transform"
    >
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1 rounded mb-4"></div>

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
        </div>

        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
              Título
            </h3>
            <p className="text-sm font-bold text-gray-800 leading-tight">
              {data?.title || 'Desconocido'}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
              Autor
            </h3>
            <p className="text-sm font-semibold text-gray-700">
              {data?.author || 'Desconocido'}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              Biblioteca
            </h3>
            <p className="text-xs text-gray-700 leading-tight">
              {data?.branchname || 'Desconocido'}
            </p>
            <p className="text-xs text-gray-500"> {data?.branchcity || 'Desconocido'}, {data?.branchstate || 'Desconocido'}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-amber-100 text-center">
        <span className="text-xs text-amber-600 font-light">
          Fondo Regional
        </span>
      </div>
    </a>
  );
}
