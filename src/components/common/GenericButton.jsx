export default function GenericButton({ onClick, text, type = "primary" }) {
  const style =
    type === "primary" ? "bg-red-500 text-white" : "border border-red-500";

  return (
    <button
      onClick={onClick}
      className={`${style} text-xs md:text-base font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors`}
    >
      {text}
    </button>
  );
}
