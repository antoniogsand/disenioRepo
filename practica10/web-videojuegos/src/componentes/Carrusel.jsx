import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Carrusel() {
    const populares = useLoaderData(); 
    const [indice, setIndice] = useState(0);

    const siguiente = () => setIndice((indice + 1) % populares.length);
    const anterior = () => setIndice((indice - 1 + populares.length) % populares.length);

    if (!populares || populares.length === 0) return null;

    const juego = populares[indice];

    return (
        <div className="relative w-full max-w-5xl mx-auto h-96 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
      
            <img 
                src={juego.background_image} 
                alt={juego.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-500"
            />
            
            <div className="relative flex flex-col justify-end h-full p-10 text-white bg-gradient-to-t from-black/90 to-transparent">
                <div className="z-10">
                    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Tendencia 🔥
                    </span>
                    <h2 className="text-5xl font-black mt-4 drop-shadow-lg">{juego.name}</h2>
                    <div className="flex gap-4 mt-2 text-xl opacity-90">
                        <p>⭐ {juego.rating}</p> {/* entre llaves porque es código js */}
                        <p>📅 {juego.released}</p>
                    </div>
                </div>
            </div>

  
            <button onClick={anterior} className="z-20 absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all">
                ❮
            </button>
            <button onClick={siguiente} className="z-20 absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all">
                ❯
            </button>
        </div>
    );
}

export default Carrusel;