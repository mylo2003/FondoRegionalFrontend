import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Materials from "./pages/Materials.jsx";
import Layout from "./pages/Layout.jsx";
import Detail from "./pages/Detail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "@fontsource-variable/roboto-slab";
import "./styles/index.css";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="material" element={<Materials />} />
          <Route path="libro/:id" element={<Detail />} />
           <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="panel"
          element={
            <PrivateRoute role="administrador">
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
