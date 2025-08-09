export default function Container({ children, className }) {
  return (
    <section className={`max-w-6xl mx-auto my-15 ${className}`}>
      {children}
    </section>
  )
}
