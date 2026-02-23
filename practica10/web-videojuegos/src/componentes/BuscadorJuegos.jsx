import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '750f16461d304a25a7108e02a2bb4f92';

function BuscadorJuegos() {
  const [termino, setTermino] = useState('');
  const [juegos, setJuegos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(false);
  const [tieneMas, setTieneMas] = useState(true);

  const fetchJuegos = useCallback(async (searchQuery, pageNum, append = false) => {
    if (cargando) return;
    setCargando(true);

    const url = searchQuery
      ? `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}&page=${pageNum}&page_size=12`
      : `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-relevance&page=${pageNum}&page_size=12`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.results) {
        setJuegos(prev => append ? [...prev, ...data.results] : data.results);
        setTieneMas(data.next !== null);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  }, [cargando]);

  useEffect(() => {
    fetchJuegos('', 1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !cargando && tieneMas) {
        setPagina(prev => {
          const nuevaPagina = prev + 1;
          fetchJuegos(termino, nuevaPagina, true);
          return nuevaPagina;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cargando, tieneMas, termino, fetchJuegos]);

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setTermino(valor);
    setPagina(1);
    fetchJuegos(valor, 1, false);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="sticky top-20 z-10 py-4 bg-gray-900/90 backdrop-blur-sm mb-8">
        <input
          type="text"
          placeholder="Escribe el nombre de un juego..."
          className="w-full max-w-md mx-auto block p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none shadow-2xl"
          value={termino}
          onChange={handleBusqueda}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {juegos.map((juego) => (
          <Link 
            to={`/juego/${juego.id}`} 
            key={`${juego.id}-${Math.random()}`} 
            className="bg-[#202020] rounded-xl overflow-hidden hover:bg-[#2a2a2a] transition-all group border border-transparent hover:border-gray-700"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={juego.background_image || 'https://via.placeholder.com/400x200'} 
                alt={juego.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <span className="text-gray-400 text-xs">🎮</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-blue-400">
                {juego.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="bg-gray-700 text-green-400 px-2 py-1 rounded text-xs font-bold">
                  {juego.metacritic || 'N/A'}
                </span>
                <span className="text-gray-500 text-xs">{juego.released?.split('-')[0]}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {cargando && (
        <div className="py-10 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-gray-400 mt-2">Cargando más juegos...</p>
        </div>
      )}
    </div>
  );
}

export default BuscadorJuegos;