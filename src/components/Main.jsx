import Container from "./Container";

export default function Main() {
  return (
    <main className="bg-[url(../../public/FondoHemerografico.webp)] bg-contain bg-no-repeat mx-auto aspect-video">
      <Container className="max-w-5xl !mt-0 text-white font-semibold flex flex-col justify-center h-1/2">
        <div className="pb-5">
          <h1 className="text-8xl">Fondo Regional</h1>
          <h2 className="text-4xl font-normal">
            Material del Fondo Regional de Autores
          </h2>
        </div>
        <form className="w-1/2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Buscar
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50/80 focus:ring-red-500 focus:border-red-500"
              placeholder="Buscar autor, título..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </Container>
    </main>
  );
}
