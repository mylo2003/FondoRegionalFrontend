import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

export default function PrivateRoute({ children, role }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

    try {
    const decoded = jwtDecode(token);

    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }

    if (role && decoded.role !== role) {
      return <Navigate to="/" replace />;
    }

    return children;
    
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
}
