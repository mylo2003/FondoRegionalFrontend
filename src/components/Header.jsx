export default function Header() {
  return (
    <header className="py-6 sticky top-0 backdrop-blur-3xl ">
      <div className="max-w-6xl flex justify-between mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="/"
            alt=""
            className="rounded"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-tight">
              Biblioteca Pública Julio Pérez Ferrero
            </span>
            <span className="text-xs text-gray-500 leading-tight">
              Cúcuta, Norte de Santander
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="bg-red-500 font-semibold text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors">Categorías</p>
          <button className="bg-red-500 font-semibold text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors">
            Ingresar
          </button>
        </div>
      </div>
    </header>
  );
}
