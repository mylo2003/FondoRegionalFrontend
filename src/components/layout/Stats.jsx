import { useEffect } from "react";
import { useBookStore } from "../../services/store/useBookStore";
import { useStatsStore } from "../../services/store/useStatsStore";
import { Users, Book, Eye } from "lucide-react";

export default function Stats() {
  const { views, downloads, getStats } = useStatsStore();
  const { totalElements } = useBookStore();

  useEffect(() => {
    getStats();
  }, []);

  return (
    <section className="bg-stone-800 h-40">
      <div className="max-w-6xl h-full flex justify-around items-center mx-auto text-2xl text-white">
        <div className="flex items-center gap-2">
          <Eye className="size-16" />
          <div className="flex flex-col">
            <span>{views || 0}</span>
            <span>Vistas</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="size-16" />
          <div className="flex flex-col">
            <span>{downloads || 0}</span>
            <span>Descargas</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Book className="size-16" />
          <div className="flex flex-col">
            <span>{totalElements || 0}</span>
            <span>Libros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
