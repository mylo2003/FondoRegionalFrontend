import { useEffect } from "react";
import { useBookStore } from "../../services/store/useBookStore";
import { useStatsStore } from "../../services/store/useStatsStore";
import { Users, Book, Eye, Download } from "lucide-react";

export default function Stats() {
  const { views, downloads, getStats } = useStatsStore();
  const { totalElements } = useBookStore();

  useEffect(() => {
    getStats();
  }, []);

  return (
    <section className="bg-stone-800 md:h-40 py-5 md:py-0">
      <div className="max-w-6xl h-full flex flex-col gap-5 md:gap-0 md:flex-row md:justify-around items-center mx-auto text-lg md:text-2xl text-white">
        <div className="flex items-center gap-2">
          <Eye className="size-8 md:size-16" />
          <div className="flex flex-row md:flex-col gap-2 md:gap-0">
            <span>{views || 0}</span>
            <span>Vistas</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Download className="size-8 md:size-16" />
          <div className="flex flex-row md:flex-col gap-2 md:gap-0">
            <span>{downloads || 0}</span>
            <span>Descargas</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Book className="size-8 md:size-16" />
          <div className="flex flex-row md:flex-col gap-2 md:gap-0">
            <span>{totalElements || 0}</span>
            <span>Libros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
