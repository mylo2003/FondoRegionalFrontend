import { logout } from "../../services/authService"

export default function ButtonSesion() {
  const token = localStorage.getItem("token");
  return (
    <>
      { token === null ? 
        <button onClick={() => window.location.href = "/login"} className="bg-red-500 font-semibold text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors">
          Ingresar
        </button>
      : 
        <button onClick={logout} className="bg-red-500 font-semibold text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors">
          Cerrar Sesión
        </button>
      }
    </>
  )
}
