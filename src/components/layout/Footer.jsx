export default function Footer() {
  return (
    <footer className="bg-stone-800">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Fonto Regional - Bibliocútuta
            </h2>
            <a
              href="https://bibliocucuta.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logoBiblioLight.webp" alt="" />
            </a>
          </div>
          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Acerca
            </h2>
            <ul className="text-gray-400 font-medium text-sm md:text-base flex flex-col gap-2 md:gap-4">
              <a href="#" className=" hover:underline">
                Explorar
              </a>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contacto
            </h2>
            <ul className="text-gray-400 font-medium text-sm md:text-base flex flex-col gap-2 md:gap-4">
              <a href="#" className="hover:underline">
                Av. 0A #12A-28 Barrio La Playa Cúcuta, Norte de Santander
              </a>
              <a href="#" className="hover:underline">
                3142180656
              </a>
              <a href="#" className="hover:underline">
                direccion@bibliocucuta.org
              </a>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xs md:text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Enlaces
            </h2>
            <ul className="text-gray-400 font-medium text-sm md:text-base  flex flex-col gap-2 md:gap-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                X
              </a>
              <a href="#" className="hover:underline">
                Youtube
              </a>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 text-center text-xs md:text-base">
          <span className="text-gray-400">
            © 2025 <a href="#">Fondo Regional</a>. Todos los derechos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
