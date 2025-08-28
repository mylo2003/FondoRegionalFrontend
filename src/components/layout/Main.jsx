import { useNavigate } from "react-router";
import { useState } from "react";
import Container from "../common/Container";
import SearchInput from "../common/SearchInput";

export default function Main() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/material?search=${encodeURIComponent(searchValue)}&page=0`);
  };

  return (
    <main className="bg-[url(/brand/FondoHemerografico.webp)] bg-contain bg-no-repeat mx-auto aspect-video">
      <Container className="max-w-5xl !mt-0 text-white font-semibold flex flex-col justify-center h-1/2">
        <div className="pb-5 mt-20 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-8xl">Fondo Regional</h1>
          <h2 className="md:text-4xl font-normal">
            Material del Fondo Regional de Autores
          </h2>
        </div>
        <SearchInput
          onSubmit={handleSearch}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Container>
    </main>
  );
}
