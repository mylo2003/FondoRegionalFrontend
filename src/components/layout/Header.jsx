import Dropdown from "../common/Dropdown";

export default function Header() {
  return (
    <header className="py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl flex justify-between mx-auto ">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Logo Fondo Regional"
            className="rounded w-30"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-xl leading-tight">
              Biblioteca Pública Julio Pérez Ferrero
            </span>
            <span className="text-sm text-black/70 leading-tight">
              Cúcuta, Norte de Santander
            </span>
          </div>
        </a>
        <div className="flex items-center gap-5">
          <p className="border border-red-500 font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors">Categorías</p>
          {/* <Dropdown /> */}
          <button className="bg-red-500 font-semibold text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors">
            Ingresar
          </button>
        </div>
      </div>
    </header>
  );
}
