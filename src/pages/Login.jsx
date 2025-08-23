import { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useLoginStore } from "../services/store/useLoginStore";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const { error, loading, auth } = useLoginStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 4) {
      newErrors.password = "La contraseña debe tener al menos 4 caracteres";
    }

    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    try {
      const { token, status } = await auth(formData);

      if (status == 200 && token != null) {
        localStorage.setItem("token", token);

        const decoded = jwtDecode(token);
        localStorage.setItem("sub", decoded.sub);
        
        const role = decoded.role;

        if (role === "administrador") {
          window.location.href = "/panel";
        } else {
          window.location.href = "/";
        }
      } else {
        setErrors({
          general: "Correo o contraseña incorrectos",
        });
      }
    } catch (error) {
      setErrors({
        general: "Credenciales incorrectas. Intenta nuevamente.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-34">
            <img className="w-full h-20" src="/logo.webp" alt="" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-gray-600 text-sm text-pretty">
              Accede para desbloquear mayor contenido del Fondo Regional
            </p>
          </div>

          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {errors.general}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Correo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full text-sm md:text-base pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 bg-white hover:border-gray-400"
                  }`}
                  placeholder="Ingresa tu usuario"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full text-sm md:text-base pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 bg-white hover:border-gray-400"
                  }`}
                  placeholder="Ingresa tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className={`w-full py-3 px-4 cursor-pointer rounded-lg font-semibold text-white transition-all duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 hover:shadow-lg"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Fondo Regional - Bibliocúcuta</p>
          <p className="text-xs text-gray-400 mt-1">
            © 2025 Biblioteca Pública Julio Pérez Ferrero
          </p>
        </div>
      </div>
    </div>
  );
}
