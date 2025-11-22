const miAudio = document.getElementById("miAudio")
const boton = document.getElementById("boton")

boton.addEventListener("click", function (){
    if(miAudio.paused){
        miAudio.play()
        boton.textContent="pausar"
        boton.classList.add("activo");
    } else {
        miAudio.pause()
        boton.textContent="reproducir"
        boton.classList.remove("activo");
    }
})

// Selecciono los elementos
const track = document.getElementById('track');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

// Configuración
let posicionActual = 0; 
const anchoMovimiento = 300; // 280px tarjeta + 20px gap

// Función para obtener el límite máximo de desplazamiento (número negativo)
function obtenerLimite() {
    // El ancho total de todas las tarjetas menos el ancho de la ventana visible
    const anchoTotal = track.scrollWidth;
    const anchoVentana = track.parentElement.clientWidth;
    return -(anchoTotal - anchoVentana);
}

// --- BOTÓN SIGUIENTE (DERECHA) ---
btnSiguiente.addEventListener('click', () => {
    const limite = obtenerLimite();

    // Si aún no ha llegado al final (el límite es un número negativo)
    if (posicionActual > limite) {
        posicionActual -= anchoMovimiento; // Mueve a la izquierda
    } else {
        // Si ya ha llegado al final, volvemos al PRINCIPIO (Efecto Infinito)
        posicionActual = 0; 
    }
    
    // Aplico el movimiento
    track.style.transform = `translateX(${posicionActual}px)`;
});

// --- BOTÓN ANTERIOR (IZQUIERDA) ---
btnAnterior.addEventListener('click', () => {
    const limite = obtenerLimite();

    // Si no esta en el inicio (0), se mueve normal
    if (posicionActual < 0) {
        posicionActual += anchoMovimiento; // Mueve a la derecha
        
    } else {
        // Si esta en el inicio (0), salta al final (Efecto Infinito)
        // Ajustado para que no se pase un hueco en blanco si no es exacto
        posicionActual = limite; 
    }

    // Aplico el movimiento
    track.style.transform = `translateX(${posicionActual}px)`;
});