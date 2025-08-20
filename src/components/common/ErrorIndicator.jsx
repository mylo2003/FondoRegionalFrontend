export default function ErrorIndicator({ className }) {
  return (
    <div
      className={`flex flex-col items-center gap-2 justify-center min-w-7xl mx-auto ${className}`}
    >
      <div role="status">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-red-400"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 9v4" />
          <path d="M12 16v.01" />
        </svg>
      </div>
      <span className="text-center">
        Ha ocurrido un error al cargar la información, <br /> recargue la página
        por favor...
      </span>
    </div>
  );
}
