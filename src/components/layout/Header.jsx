import ButtonSesion from "../common/ButtonSesion";
import GenericButton from "../common/GenericButton";

export default function Header() {
  const email = localStorage.getItem("sub");

  return (
    <header className="px-2 md:px-0 py-3 md:py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-md border border-b border-gray-200">
      <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between mx-auto gap-2 md:gap-0">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Logo Fondo Regional"
            className="rounded w-20 md:w-30 select-none"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm md:text-xl leading-tight">
              Biblioteca Pública Julio Pérez Ferrero
            </span>
            <span className="text-xs md:text-sm text-gray-800 leading-tight">
              Cúcuta, Norte de Santander
            </span>
          </div>
        </a>
        <div className="items-center gap-3 hidden md:flex">
          { email &&  <p className="text-gray-800 border border-red-500 rounded-lg p-2 text-xs md:text-base">Bienvenido, {email || "N/A"}</p>}
          <GenericButton
            onClick={() => (window.location.href = "#material")}
            text="Material"
            type="secondary"
          />
          <ButtonSesion />
        </div>
      </div>
    </header>
  );
}
