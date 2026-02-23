import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Carrusel({ juegos }) {
    const scrollRef = useRef(null);

    if (!juegos || juegos.length === 0) return null;

    const destacados = juegos.slice(0, 10);

  // Función para mover el carrusel
    const scroll = (direccion) => {
        const { current } = scrollRef;
        const scrollAmount = 400; // Cuánto se desplaza en cada clic
        if (direccion === 'izq') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
        <style dangerouslySetInnerHTML={{ __html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <button 
            onClick={() => scroll('izq')}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700"
        >
            <span className="text-2xl">←</span>
        </button>

        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
        >
            {destacados.map((juego) => (
            <Link 
                to={`/juego/${juego.id}`} 
                key={juego.id} 
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] h-64 relative rounded-3xl overflow-hidden group snap-center shadow-2xl border border-white/5"
            >
                <img 
                src={juego.background_image} 
                alt={juego.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black text-white leading-tight mb-2">{juego.name}</h3>
                <p className="text-blue-400 font-bold">⭐ {juego.rating}</p>
                </div>
            </Link>
            ))}
        </div>

        <button 
            onClick={() => scroll('der')}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700"
        >
            <span className="text-2xl">→</span>
        </button>

        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#0f172a] to-transparent pointer-events-none hidden md:block" />
        </div>
    );
}

export default Carrusel;