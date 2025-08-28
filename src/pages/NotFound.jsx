import { Info } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center text-lg md:text-xl my-30">
      <Info className="size-8 md:size-15" />
      No se encontró material
      <Link className="border border-red-400 rounded-lg p-2 text-sm md:text-base" to="/">Vuelve al inicio</Link>
    </div>
  );
}
