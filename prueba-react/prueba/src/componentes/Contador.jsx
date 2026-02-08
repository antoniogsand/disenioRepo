import React, { useState } from 'react';

const Contador = ({ id, valor, onUpdate, onReset }) => {
  const [paso, setPaso] = useState(1); 
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <h4>Contador #{id}</h4>
        <h2>{valor}</h2>
        <input 
        type="number" 
        value={paso} 
        onChange={(e) => setPaso(Number(e.target.value))} 
        style={{ width: '50px', marginBottom: '10px' }}
        />
        <button onClick={() => onUpdate(id, paso)}>Aumentar</button>
        <button onClick={() => onUpdate(id, -paso)}>Decrementar</button>
        <button onClick={() => onReset(id)}>Reset</button>
    </div>
    );
};
export default Contador