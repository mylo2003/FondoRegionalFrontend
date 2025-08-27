import { Users, UserPlus, Home, LogOut } from "lucide-react";
import { useState } from "react";
import UsersTable from "../components/modal/UsersTable";
import CreateUser from "../components/modal/CreateUser";
import { logout } from "../services/authService";
import GenericButton from "../components/common/GenericButton";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("users");
  const email = localStorage.getItem("sub");

  return (
    <main className="md:grid md:grid-cols-5 md:grid-rows-5 gap-4 min-h-screen overflow-hidden">
      <aside className="hidden md:block row-span-5 bg-stone-800 text-white sticky top-0">
        <div className="py-2 mx-6 mt-5 rounded-xl bg-white flex justify-center items-center">
          <div className="rounded h-12 w-30  flex items-center justify-center text-white font-bold text-sm">
            <img
              src="/logo.webp"
              alt="Logo Fondo Regional"
              className="select-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <span className="font-semibold text-sm leading-tight text-center">
            Biblioteca Julio Pérez Ferrero
          </span>
          <span className="text-sm leading-tight">
            Cúcuta, Norte de Santander
          </span>
        </div>
        <div className="flex flex-col mx-6 gap-3 mt-10">
          <button
            onClick={() => setActiveView("users")}
            className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors ${
              activeView === "users"
                ? "bg-red-600 text-white"
                : "bg-red-500 text-white hover:bg-red-400"
            }`}
          >
            <Users className="size-4" />
            <span className="hidden md:flex">Ver Usuarios</span>
          </button>
          <button
            onClick={() => setActiveView("create")}
            className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors ${
              activeView === "create"
                ? "bg-red-600 text-white"
                : "bg-red-500 text-white hover:bg-red-400"
            }`}
          >
            <UserPlus className="size-4" />
            Crear Usuario
          </button>
        </div>
      </aside>

      <header className="col-span-4 flex justify-between items-center mx-7 my-5 md:my-0">
        <div>
          <h2 className="text-lg md:text-3xl font-semibold">
            Panel Administrativo
          </h2>
          <p className="text-gray-800 text-sm md:text-base">
            Gestión de usuarios de la biblioteca
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-gray-800 border border-red-500 rounded-lg p-2 text-xs md:text-base">
            Bienvenido, {email || "N/A"}
          </p>
          <div className="gap-2 hidden md:flex">
            <GenericButton
              onClick={() => (window.location.href = "/")}
              text="Ir a inicio"
              type="secondary"
            />
            <GenericButton onClick={logout} text="Cerrar sesión" />
          </div>
        </div>
      </header>

      <section className="md:col-span-4 md:row-span-4 md:col-start-2 md:row-start-2 mx-7 overflow-y-auto mb-20 md:h-[500px]">
        {activeView === "users" ? <UsersTable /> : <CreateUser />}
      </section>

      <div className="md:hidden bg-stone-800 py-4 text-white w-full flex justify-evenly fixed bottom-0 gap-3">
        <button
          onClick={() => setActiveView("users")}
          className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors ${
            activeView === "users"
              ? "bg-red-600 text-white"
              : "bg-red-500 text-white hover:bg-red-400"
          }`}
        >
          <Users className="size-5 md:size-4" />
          <span className="hidden md:flex">Ver Usuarios</span>
        </button>
        <button
          onClick={() => setActiveView("create")}
          className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors ${
            activeView === "create"
              ? "bg-red-600 text-white"
              : "bg-red-500 text-white hover:bg-red-400"
          }`}
        >
          <UserPlus className="size-5 md:size-4" />
          <span className="hidden md:flex">Crear Usuario</span>
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors bg-red-500 text-white hover:bg-red-400`}>
          <Home className="size-5 md:size-4" />
        </button>
        <button
          onClick={logout}
          className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors bg-red-500 text-white hover:bg-red-400`}>
          <LogOut className="size-5 md:size-4" />
        </button>
      </div>
    </main>
  );
}
