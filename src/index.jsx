import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './styles/index.css'
import Home from './pages/Home.jsx';
import Materials from './pages/Materials.jsx';
import Layout from './pages/Layout.jsx';
import '@fontsource-variable/roboto-slab';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="material" element={<Materials />} />
         </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
