import React, { useState } from 'react';
import Contador from './componentes/Contador';

const App = () => {
  const [contadores, setContadores] = useState([]);
  const [sumaTotal, setSumaTotal] = useState(0);


  const añadirContador = () => {
    const nuevo = { id: Date.now(), valor: 0 };
    setContadores([...contadores, nuevo]);
  };

  const actualizarContador = (id, cantidad) => {
    setContadores(prev => prev.map(c => 
      c.id === id ? { ...c, valor: c.valor + cantidad } : c
    ));
    setSumaTotal(prevSuma => prevSuma + cantidad);
  };



 

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Gestión de Contadores</h1>
        <button onClick={añadirContador} style={{ backgroundColor: '#333', color: 'white' }}>
          + Añadir contador
        </button>
      </div>

      <div style={{ display: 'flex', gap: '50px', marginBottom: '20px' }}>
        <div><strong>Suma Total:</strong> <div>{sumaTotal}</div></div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {contadores.map(c => (
          <Contador 
            key={c.id} 
            {...c} 
            onUpdate={actualizarContador} 
           
          />
        ))}
      </div>
    </div>
  );
};

export default App;