import { useLoaderData, Link, useSearchParams } from 'react-router-dom';

function ListaPublishers() {
    const { data, currentPage } = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const publishers = data.results;

    const cambiarPagina = (nuevaPagina) => {
        searchParams.set("page", nuevaPagina);
        setSearchParams(searchParams);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0f172a] pt-32 pb-20 px-6">
        <div className="max-w-screen-xl mx-auto">
            
            <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                Grandes <span className="text-blue-500">Publishers</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Explora las compañías que han dado vida a tus historias favoritas. 
                Desde gigantes de la industria hasta estudios independientes.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishers.map((pub) => (
                <Link 
                to={`/publisher/${pub.id}`} 
                key={pub.id}
                className="group relative h-64 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
                >
                <img 
                    src={pub.image_background} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                    alt={pub.name}
                />
                

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h2 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {pub.name}
                    </h2>
                    <div className="flex items-center gap-4 mt-2">
                    <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">
                        {pub.games_count} Juegos
                    </span>
                    <div className="h-1 w-1 bg-slate-600 rounded-full" />
                    <span className="text-gray-400 text-sm">
                        Ver catálogo →
                    </span>
                    </div>
                </div>
                </Link>
            ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-20">
            <button 
                onClick={() => cambiarPagina(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-8 py-3 bg-slate-800 text-white rounded-2xl disabled:opacity-20 hover:bg-blue-600 transition-all font-bold border border-slate-700"
            >
                Anterior
            </button>
            
            <div className="flex flex-col items-center">
                <span className="text-blue-500 font-black text-2xl bg-slate-900 w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                {currentPage}
                </span>
            </div>

            <button 
                onClick={() => cambiarPagina(currentPage + 1)}
                disabled={!data.next}
                className="px-8 py-3 bg-slate-800 text-white rounded-2xl disabled:opacity-20 hover:bg-blue-600 transition-all font-bold border border-slate-700"
            >
                Siguiente
            </button>
            </div>
        </div>
        </div>
    );
}

export default ListaPublishers;