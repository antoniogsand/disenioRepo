import BuscadorJuegos from '../componentes/BuscadorJuegos'; 

function Buscar() {
  return (
    <div className="pt-24 p-8 min-h-screen bg-gray-900 text-center">
      <h1 className="text-4xl font-black text-white mb-2">🔎 Buscador de Juegos</h1>
      <p className="text-gray-400 mb-10">Encuentra tus juegos favoritos y consulta sus estadísticas.</p>
      
    
      <BuscadorJuegos />
    </div>
  );
}

export default Buscar;