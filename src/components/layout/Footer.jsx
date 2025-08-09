export default function Footer() {
  return (
    <footer className="bg-stone-800">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Fonto Regional - Bibliocútuta</h2>
                <a href="https://bibliocucuta.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/logoBiblioLight.webp" alt="" />
                </a>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Acerca</h2>
                <ul className="text-gray-400 font-medium">
                   <a href="#" className=" hover:underline mb-4">Explorar</a>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                <ul className="text-gray-400 font-medium flex flex-col">
                    <a href="#" className="hover:underline mb-4">Av. 0A #12A-28 Barrio La Playa Cúcuta, Norte de Santander</a>
                    <a href="#" className="hover:underline mb-4">3142180656</a>
                    <a href="#" className="hover:underline mb-4">direccion@bibliocucuta.org</a>
                </ul>
            </div>
 
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Enlaces</h2>
                <ul className="text-gray-400 font-medium  flex flex-col">
                    <a href="#" className="hover:underline mb-4">Facebook</a>
                    <a href="#" className="hover:underline mb-4">Instagram</a>
                    <a href="#" className="hover:underline mb-4">X</a>
                    <a href="#" className="hover:underline mb-4">Youtube</a>
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 text-center">
            <span className="text-gray-400">© 2025 <a href="#">Fondo Regional</a>. Todos los derechos reservados.
            </span>
          </div>
        </div>
    </footer>
  )
}
