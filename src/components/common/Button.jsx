import ArrowRight from "../Icons/ArrowRight";

export default function Button({ disabled, style, href, text }) {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={() => !disabled && (window.location.href = href)}
      className={`${style} cursor-pointer bg-red-500 flex items-center font-semibold text-white text-xl rounded-lg px-10 py-4 hover:bg-red-400 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed`}
    >
      {text}
      <ArrowRight />
    </button>
  );
}
