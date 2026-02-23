const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
// Para evitar problemas en ejecución local
app.use(cors());
app.get("/api", (req, res) => {
res.json({
mensaje: "Hola desde la API 🚀",
fecha: new Date()
});
});
app.listen(PORT, () => {
console.log(`API escuchando en http://localhost:${PORT}`);
});