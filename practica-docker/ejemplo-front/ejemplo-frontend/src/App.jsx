import { useEffect, useState } from "react";
function App() {
const [datos, setDatos] = useState(null);
useEffect(() => {
fetch("http://localhost:3001/api")
.then(res => res.json())
.then(data => setDatos(data))
.catch(err => console.error(err));
}, []);
return (
<div style={{ padding: "2rem", fontFamily: "Arial" }}>
<h1>Frontend en React</h1>
{datos ? (
<>
<p><strong>Mensaje:</strong> {datos.mensaje}</p>
<p><strong>Fecha:</strong> {datos.fecha}</p>
</>
) : (
<p>Cargando datos...</p>
)}
</div>
);
}
export default App;