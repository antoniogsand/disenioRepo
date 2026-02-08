import { Link } from 'react-router-dom';
import Carrusel from './componentes/Carrusel';

function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-50 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8">
            Explora. Descubre. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Toda la info sobre tus juegos favoritos a un click
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed mb-10">
            Accede a la base de datos más completa de videojuegos. Consulta las estadísticas, 
            valoraciones y detalles de más de 500,000 títulos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/buscar" className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300">
              Empezar a buscar
            </Link>
            <a href="#destacados" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border hover:bg-red-600 border-gray-200 hover:border-gray-900 transition-all duration-300">
              Ver destacados
            </a>
          </div>
        </div>
      </section>

<section className="py-16 bg-[#0f172a]">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-3xl">🔍</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Búsqueda Inteligente</h3>
        <p className="text-gray-400">
          Encuentra cualquier título al instante. Filtra por género, plataforma o fecha de lanzamiento.
        </p>
      </div>

      <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-colors">
        <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-3xl">🔥</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Títulos Destacados</h3>
        <p className="text-gray-400">
          Mantente al día. Analizamos los juegos más populares para que no te pierdas nada.
        </p>
      </div>

      <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-colors">
        <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-3xl">📊</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Info Detallada</h3>
        <p className="text-gray-400">
          Accede a valoraciones de la comunidad, capturas de pantalla y requisitos técnicos antes de empezar a jugar.
        </p>
      </div>

    </div>
  </div>
</section>

      <section id="destacados" className="py-20 bg-[#0f172a]">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Tendencias</h2>
              <p className="text-gray-500 mt-2">Los títulos que están dominando la escena ahora mismo.</p>
            </div>
          </div>
        
            <Carrusel />
        </div>
      </section>
    </div>
  );
}

export default Home;