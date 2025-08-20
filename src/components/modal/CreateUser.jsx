import { useState } from "react";
import { useUserStore } from "../../services/store/useUserStore";
import LoadingIndicator from "../common/LoadingIndicator";
import StatusModal from "./StatusModal";

export default function CreateUser() {
  const { error, loading, createUser } = useUserStore();
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: "Usuario",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFields = () => {
    const errors = {};

    if (!newUser.name.trim()) {
      errors.name = "El nombre es obligatorio";
    }

    if (!newUser.lastName.trim()) {
      errors.lastName = "El apellido es obligatorio";
    }

    if (!newUser.email.trim()) {
      errors.email = "El correo electrónico es obligatorio";
    } else if (!validateEmail(newUser.email)) {
      errors.email = "Ingrese un correo electrónico válido";
    }

    if (!newUser.password.trim()) {
      errors.password = "La contraseña es obligatoria";
    } else if (!(newUser.password.length >= 6)) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateUser = async () => {
    setValidationErrors({});

    if (!validateFields()) {
      return;
    }

    try {
      const userData = {
        name: newUser.name.trim(),
        lastName: newUser.lastName.trim(),
        email: newUser.email.trim().toLowerCase(),
        password: newUser.password,
        role: newUser.role,
      };

      await createUser(userData);
      setOpenStatusModal(true);

      if (!error) {
        setNewUser({
          name: "",
          lastName: "",
          email: "",
          password: "",
          role: "Usuario",
        });
      }
    } catch (err) {
      console.error("Error al crear usuario:", err);
    }
  };

  const handleClearForm = () => {
    setNewUser({
      name: "",
      lastName: "",
      email: "",
      password: "",
      role: "Usuario",
    });
    setValidationErrors({});
  };

  if (loading) return <LoadingIndicator className="!h-[500px] !min-w-xl" text="usuarios" />

  return (
    <>
    
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Crear Nuevo Usuario</h3>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  validationErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Ingrese el nombre"
                disabled={loading}
              />
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellido *
              </label>
              <input
                type="text"
                value={newUser.lastName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  validationErrors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Ingrese el apellido"
                disabled={loading}
              />
              {validationErrors.lastName && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  validationErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="usuario@email.com"
                disabled={loading}
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rol *
              </label>
              <select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  validationErrors.role ? "border-red-500" : "border-gray-300"
                }`}
                disabled={loading}
              >
                <option value="Usuario">Usuario</option>
                <option value="Administrador">Administrador</option>
              </select>
              {validationErrors.role && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.role}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña *
              </label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  validationErrors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Ingrese una contraseña (mínimo 6 caracteres)"
                disabled={loading}
              />
              {validationErrors.password && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
              )}
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={handleCreateUser}
              disabled={loading}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creando..." : "Crear Usuario"}
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              disabled={loading}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
    {openStatusModal && (
      <StatusModal 
        text="guardó" 
        status={!error} 
        onClose={() => setOpenStatusModal(false)} 
      />
    )}
    </>
  );
}