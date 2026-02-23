import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import Carrusel from './componentes/Carrusel';

function Home() {
  const { data, currentPage } = useLoaderData(); 
  const [searchParams, setSearchParams] = useSearchParams();

  const juegos = data.results;

  const cambiarPagina = (nuevaPagina) => {
    searchParams.set("page", nuevaPagina);
    setSearchParams(searchParams);
    document.getElementById('lista-juegos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/20 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
            Explora. Descubre. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Toda la info sobre tus juegos favoritos a un click
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
            Accede a la base de datos más completa de videojuegos. Consulta las estadísticas, 
            valoraciones y detalles de más de 500,000 títulos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/buscar" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300">
              Empezar a buscar
            </Link>
            <a href="#destacados" className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              Ver destacados
            </a>
          </div>
        </div>
      </section>


      <section id="destacados" className="py-20 bg-[#0f172a]">
  <div className="max-w-screen-xl mx-auto px-6">
    <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Tendencias</h2>
    
    <Carrusel juegos={juegos} /> 
    
  </div>
</section>

      <section id="lista-juegos" className="py-20 bg-[#0f172a] border-t border-slate-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Todos los Juegos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {juegos && juegos.map((juego) => (
              <Link 
                to={`/juego/${juego.id}`} 
                key={juego.id}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group">
                <img src={juego.background_image} className="h-48 w-full object-cover opacity-80 group-hover:opacity-100" alt={juego.name} />
                <div className="p-4">
                  <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors truncate">{juego.name}</h3>
                  <p className="text-gray-500 text-xs mt-2">⭐ {juego.rating} | {juego.released}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-16">
            <button 
              onClick={() => cambiarPagina(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-2 bg-slate-800 text-white rounded-xl disabled:opacity-20 hover:bg-blue-600 transition-all font-bold">
              Anterior
            </button>
            <span className="text-blue-400 font-black text-xl bg-slate-800 w-12 h-12 flex items-center justify-center rounded-full border border-blue-500/50">
              {currentPage}
            </span>
            <button 
              onClick={() => cambiarPagina(currentPage + 1)}
              disabled={!data.next}
              className="px-6 py-2 bg-slate-800 text-white rounded-xl disabled:opacity-20 hover:bg-blue-600 transition-all font-bold">
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;