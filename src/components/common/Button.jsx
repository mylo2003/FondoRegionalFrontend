import { ChevronRight } from "lucide-react";

export default function Button({ disabled, style, href, text, onClick }) {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={() => {
        !disabled && (window.location.href = href);
        onClick();
      }}
      className={`${style} text-base cursor-pointer bg-red-500 flex items-center font-semibold text-white md:text-xl rounded-lg px-5 py-2 md:px-10 md:py-4 hover:bg-red-400 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed`}
    >
      {text}
      <ChevronRight />
    </button>
  );
}
