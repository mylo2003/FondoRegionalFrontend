export default function Button({ style, href, text }) {
  return (
    <a className={`${style} bg-red-500 font-semibold text-white text-xl rounded-lg px-10 py-4 hover:bg-red-400 transition-colors`} href={href}>
      {text}
    </a>
  )
}
