import { Users, UserPlus } from 'lucide-react';
import { useState } from "react";
import UsersTable from "../components/modal/UsersTable";
import CreateUser from "../components/modal/CreateUser";
import { logout } from "../services/authService"

export default function Dashboard() {
  const [activeView, setActiveView] = useState('users');

  return (
      <main className="flex relative min-h-screen bg-gray-100">
      <aside className="h-screen w-60 bg-stone-800 text-white sticky top-0">
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
            onClick={() => setActiveView('users')}
            className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors ${
              activeView === 'users' 
                ? 'bg-red-600 text-white' 
                : 'bg-red-500 text-white hover:bg-red-400'
            }`}
          >
            <Users className="h-4 w-4" />
            Ver Usuarios
          </button>
          <button 
            onClick={() => setActiveView('create')}
            className={`flex items-center gap-2 font-semibold rounded-lg px-4 py-3 cursor-pointer transition-colors ${
              activeView === 'create' 
                ? 'bg-red-600 text-white' 
                : 'bg-red-500 text-white hover:bg-red-400'
            }`}
          >
            <UserPlus className="h-4 w-4" />
            Crear Usuario
          </button>
        </div>
      </aside>

      <section className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Panel Administrativo</h2>
          <p className="text-gray-600 mt-1">Gestión de usuarios de la biblioteca</p>
        </div>

        {activeView === 'users' ? <UsersTable /> : <CreateUser />}
      </section>
      
      <button 
        onClick={logout}
        className="absolute right-5 top-5 bg-red-500 font-semibold text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-red-400 transition-colors"
      >
        Cerrar sesión
      </button>
    </main>
  )
}
