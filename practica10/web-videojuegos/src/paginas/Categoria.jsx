import { useLoaderData, useParams, Link, useSearchParams } from 'react-router-dom';

function Categoria() {
    const { data, currentPage } = useLoaderData(); 
    const { tipo } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    //Extrae la lista de juegos de data.results
    const listaJuegos = data.results;

    //Función para cambiar de página
    const cambiarPagina = (nuevaPagina) => {
        searchParams.set("page", nuevaPagina);
        setSearchParams(searchParams);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="pt-28 p-6 min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
            
            <h1 className="text-4xl font-black mb-8 capitalize border-l-4 border-blue-500 pl-4">
            Explorando: {tipo === 'genres' ? 'Género' : 'Etiqueta'}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listaJuegos && listaJuegos.map((juego) => (
                <Link 
                to={`/juego/${juego.id}`} 
                key={juego.id}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg group"
                >
                <div className="relative h-48">
                    <img 
                    src={juego.background_image} 
                    alt={juego.name}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-yellow-400">
                    ⭐ {juego.rating}
                    </div>
                </div>
                
                <div className="p-4">
                    <h2 className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                    {juego.name}
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                    Lanzamiento: {juego.released}
                    </p>
                </div>
                </Link>
            ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-12 mb-10">
            <button
                onClick={() => cambiarPagina(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-2 bg-gray-800 rounded-full hover:bg-blue-600 disabled:opacity-30 disabled:hover:bg-gray-800 transition-all font-bold"
            >
                ← Anterior
            </button>

            <span className="text-xl font-black text-blue-400 bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {currentPage}
            </span>

            <button
                onClick={() => cambiarPagina(currentPage + 1)}
                disabled={!data.next}
                className="px-6 py-2 bg-gray-800 rounded-full hover:bg-blue-600 disabled:opacity-30 disabled:hover:bg-gray-800 transition-all font-bold"
            >
                Siguiente →
            </button>
            </div>

            {(!listaJuegos || listaJuegos.length === 0) && (
            <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No se han encontrado juegos en esta sección.</p>
            </div>
            )}
        </div>
        </div>
    );
    }

export default Categoria;