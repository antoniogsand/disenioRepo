
const pantalla = document.getElementById('pantalla');

let estado = "inicial"; 
let tiempoInicio;
let temporizador;

// En lugar de .on('click'), uso addEventListener y el evento click como un parametro y una funcion anónima
pantalla.addEventListener('click', function() {
    
    if (estado == "inicial" || estado == "resultado") {
        estado = "espera";

        // En JS puro los estilos se introducen de forma diferente también
        pantalla.style.backgroundColor = '#365670';
        pantalla.textContent = 'Espera a que la pantalla cambie';

        let tiempoAleatorio = Math.floor(Math.random() * 3000) + 2000;

        temporizador = setTimeout(() => {
            estado = "reaccion";
            pantalla.style.backgroundColor = 'red';
            pantalla.textContent = '¡PULSA AHORA!';
            tiempoInicio = Date.now(); 
        }, tiempoAleatorio);

    } else if (estado == "espera") {
        clearTimeout(temporizador);
        estado = "resultado";
        pantalla.style.backgroundColor = '#ffcc00';
        pantalla.textContent = '¡Has hecho click demasiado pronto! Haz click para reintentar.';

    } else if (estado == "reaccion") {
        let tiempoFinal = Date.now();
        let diferencia = tiempoFinal - tiempoInicio;
        
        estado = "resultado";
        pantalla.style.backgroundColor = '#1ee428';
        pantalla.textContent = `Tu tiempo: ${diferencia} ms. Haz click para jugar de nuevo.`;
    }
});