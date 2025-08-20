import { logout } from "../../services/authService"
import GenericButton from "./GenericButton";

export default function ButtonSesion() {
  const token = localStorage.getItem("token");
  return (
    <>
      { token === null ? 
        <GenericButton onClick={() => window.location.href = "/login"} text='Ingresar' />
      : 
        <GenericButton onClick={logout} text='Cerrar Sesión' />
      }
    </>
  )
}
