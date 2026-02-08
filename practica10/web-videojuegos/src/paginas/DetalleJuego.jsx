import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DetalleJuego() {
  const juego = useLoaderData();
  const [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favoritos_juegos')) || [];
    setEsFavorito(favs.includes(juego.id));
  }, [juego.id]);

  const toggleFavorito = () => {
    let favs = JSON.parse(localStorage.getItem('favoritos_juegos')) || [];
    if (favs.includes(juego.id)) {
      favs = favs.filter(id => id !== juego.id);
      setEsFavorito(false);
    } else {
      favs.push(juego.id);
      setEsFavorito(true);
    }
    localStorage.setItem('favoritos_juegos', JSON.stringify(favs));
  };

  return (
    <div className="pt-28 p-6 min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
          <img 
            src={juego.background_image_additional || juego.background_image} 
            className="w-full h-full object-cover opacity-60"
            alt={juego.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-10">
            <div className="flex justify-between items-end w-full">
              <div>
                <h1 className="text-6xl font-black drop-shadow-lg">{juego.name}</h1>
                <p className="text-yellow-400 text-xl font-bold mt-2">Rating: {juego.rating} / 5 ⭐</p>
              </div>
              <button 
                onClick={toggleFavorito}
                className={`text-5xl transition-all hover:scale-110 ${esFavorito ? 'text-yellow-400' : 'text-gray-400'}`}
              >
                {esFavorito ? '★' : '☆'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Descripción</h2>
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: juego.description }} 
            />
          </div>

          <div className="bg-gray-800 p-8 rounded-3xl h-fit">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Ficha Técnica</h2>
            <ul className="space-y-4 text-sm">
              <li><span className="text-gray-400 block">Lanzamiento:</span> {juego.released}</li>
              <li><span className="text-gray-400 block">Plataformas:</span> {juego.platforms?.map(p => p.platform.name).join(', ')}</li>
              <li><span className="text-gray-400 block">Géneros:</span> {juego.genres?.map(g => g.name).join(', ')}</li>
              <li><span className="text-gray-400 block">Desarrollador:</span> {juego.developers?.map(d => d.name).join(', ')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleJuego;