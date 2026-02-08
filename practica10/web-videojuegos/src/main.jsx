import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import ScrollArriba from './componentes/ScrollArriba';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from './App';
import Buscar from './paginas/Buscar';
import DetalleJuego from './paginas/DetalleJuego';

const API_KEY = '750f16461d304a25a7108e02a2bb4f92';

// 1. Layout: La estructura fija
function AppLayout() {
  return (
    <>
      <ScrollArriba/>
      <Navbar />
      <main>
        <Outlet /> {/* Aquí se pintan las páginas */}
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&ordering=-added&page_size=5&dates=2023-01-01,2025-12-31`);
          if (!res.ok) throw new Error("Error cargando home");
          const data = await res.json();
          return data.results;
        }
      },
      {
        path: "/buscar",
        element: <Buscar />,
      },
      {
        path: "/juego/:id",
        element: <DetalleJuego />,
        loader: async ({ params }) => {
          const res = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`);
          if (!res.ok) throw new Error("Juego no encontrado");
          return res.json();
        }
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);