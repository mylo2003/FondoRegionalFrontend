import Users from "../Icons/Users";
import Views from "../Icons/Views";
import Books from "../Icons/Books";

export default function Stats() {
  return (
    <section className="bg-stone-800 h-40">
      <div className="max-w-6xl h-full flex justify-around items-center mx-auto text-2xl text-white">
        <div className="flex items-center gap-2">
          <Users className="size-16" />
          <div className="flex flex-col">
            <span>1</span>
            <span>Visitantes</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Views className="size-16" />
          <div className="flex flex-col">
            <span>1</span>
            <span>Vistas</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Books className="size-16" />
          <div className="flex flex-col">
            <span>1</span>
            <span>Libros</span>
          </div>
        </div>
      </div>
    </section>
  );
}
