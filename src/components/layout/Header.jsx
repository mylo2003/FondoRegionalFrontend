import ButtonSesion from "../common/ButtonSesion";
import GenericButton from "../common/GenericButton";

export default function Header() {
  return (
    <header className="py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-md border border-b border-gray-200">
      <div className="max-w-6xl flex justify-between mx-auto ">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Logo Fondo Regional"
            className="rounded w-30 select-none"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-xl leading-tight">
              Biblioteca Pública Julio Pérez Ferrero
            </span>
            <span className="text-sm text-gray-800 leading-tight">
              Cúcuta, Norte de Santander
            </span>
          </div>
        </a>
        <div className="flex items-center gap-5">
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
