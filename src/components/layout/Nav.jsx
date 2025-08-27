import GenericButton from "../common/GenericButton";
import ButtonSesion from "../common/ButtonSesion";

export default function Nav() {
  const email = localStorage.getItem("sub");

  return (
    <div className="w-full items-center gap-3 flex justify-evenly fixed bottom-0 p-4 bg-white/80 backdrop-blur-lg  md:hidden">
      {email && (
        <p className="border border-red-500  rounded-lg p-2 text-xs md:text-base">
          Bienvenido, {email || "N/A"}
        </p>
      )}
      <GenericButton
        onClick={() => (window.location.href = "#material")}
        text="Material"
        type="secondary"
      />
      <ButtonSesion />
    </div>
  );
}
