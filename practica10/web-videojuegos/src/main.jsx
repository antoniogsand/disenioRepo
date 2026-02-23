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
import Categoria from './paginas/Categoria';
import InfoPublisher from './paginas/InfoPublisher';
import ListaPublishers from './paginas/ListaPublishers';

import { gameService } from './services/api';

function AppLayout() {
  return (
    <>
      <ScrollArriba/>
      <Navbar />
      <main><Outlet /></main>
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
        loader: async ({ request }) => {
          const page = new URL(request.url).searchParams.get("page") || "1";
          const data = await gameService.getGames(page);
          return { data, currentPage: parseInt(page) };
        }
      },
      {
        path: "/buscar",
        element: <Buscar />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const q = url.searchParams.get("q") || "";
          const page = url.searchParams.get("page") || "1";
          if (!q) return { data: { results: [] }, currentPage: 1 };
          
          const data = await gameService.searchGames(q, page);
          return { data, currentPage: parseInt(page) };
        }
      },
      {
        path: "/juego/:id",
        element: <DetalleJuego />,
        loader: async ({ params }) => gameService.getGameDetails(params.id)
      },
      {
        path: "/categoria/:tipo/:id",
        element: <Categoria />,
        loader: async ({ params, request }) => {
          const page = new URL(request.url).searchParams.get("page") || "1";
          const data = await gameService.getGamesByCategory(params.tipo, params.id, page);
          return { data, currentPage: parseInt(page) };
        }
      },
      {
        path: "/publisher/:id",
        element: <InfoPublisher />,
        loader: async ({ params, request }) => {
          const page = new URL(request.url).searchParams.get("page") || "1";
          const info = await gameService.getPublisherDetails(params.id, page);
          return { ...info, currentPage: parseInt(page) };
        }
      },
      {
        path: "/publishers",
        element: <ListaPublishers />,
        loader: async ({ request }) => {
          const page = new URL(request.url).searchParams.get("page") || "1";
          const data = await gameService.getPublishers(page);
          return { data, currentPage: parseInt(page) };
        }
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);