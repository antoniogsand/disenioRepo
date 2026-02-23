import { useLoaderData, Link, useSearchParams } from 'react-router-dom';

function InfoPublisher() {
    const { detalles, juegos, currentPage } = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const cambiarPagina = (nuevaPagina) => {
        searchParams.set("page", nuevaPagina);
        setSearchParams(searchParams);
        document.getElementById('juegos-seccion').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pt-28 p-6 min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12 bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-700">
            <img 
                src={detalles.image_background} 
                className="w-full md:w-1/3 h-64 object-cover rounded-2xl shadow-lg"
                alt={detalles.name}/>
            <div>
                <h1 className="text-5xl font-black mb-4">{detalles.name}</h1>
                <p className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">
                Total de juegos: {detalles.games_count}
                </p>
                <div 
                className="text-gray-300 text-sm leading-relaxed max-h-40 overflow-y-auto pr-4 custom-scrollbar"
                dangerouslySetInnerHTML={{ __html: detalles.description }}
                />
            </div>
            </div>

            <h2 id="juegos-seccion" className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Juegos publicados por {detalles.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {juegos.results.map((juego) => (
                <Link 
                to={`/juego/${juego.id}`} 
                key={juego.id}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg group border border-gray-700">
                <img src={juego.background_image} className="h-48 w-full object-cover" alt={juego.name} />
                <div className="p-4">
                    <h3 className="font-bold group-hover:text-blue-400 transition-colors truncate">{juego.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">⭐ {juego.rating} | {juego.released}</p>
                </div>
                </Link>
            ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-12 mb-10">
            <button
                onClick={() => cambiarPagina(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-2 bg-gray-800 rounded-xl hover:bg-blue-600 disabled:opacity-20 transition-all font-bold border border-gray-600">
                Anterior
            </button>

            <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 uppercase font-bold mb-1">Página</span>
                <span className="text-xl font-black text-blue-400 bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {currentPage}
                </span>
            </div>

            <button
                onClick={() => cambiarPagina(currentPage + 1)}
                disabled={!juegos.next}
                className="px-6 py-2 bg-gray-800 rounded-xl hover:bg-blue-600 disabled:opacity-20 transition-all font-bold border border-gray-600">
                Siguiente
            </button>
            </div>
        </div>
        </div>
    );
}

export default InfoPublisher;