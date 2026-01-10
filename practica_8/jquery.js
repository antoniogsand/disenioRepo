let estado = "inicial"; // Puede ser inicial, espera, reaccion, resultado
let tiempoInicio;
let temporizador;
// $('#pantalla') hace referencia al elemento html con ese id
$('#pantalla').on('click', function() {
    if (estado == "inicial" || estado == "resultado") {
        // En espera
        estado = "espera";

        // Cambio el color y $(this) hace referencia a $('#pantalla')
        $(this).css('background-color', '#365670').text('Espera a que la pantalla cambie');

        // Tiempo al azar entre 2 y 5 segundos
        let tiempoAleatorio = Math.floor(Math.random() * 3000) + 2000;

        temporizador = setTimeout(() => {
            estado = "reaccion";
            $(this).css('background-color', 'red').text('¡PULSA AHORA!');
            tiempoInicio = Date.now(); 
        }, tiempoAleatorio);

    } else if (estado == "espera") {
        // Si el usuario pulsa mientras está en "espera", se cancela el tiempo 
        clearTimeout(temporizador);
        estado = "resultado";
        $(this).css('background-color', '#ffcc00').text('¡Haz hecho click demasiado pronto! Haz click para reintentar.');

    } else if (estado == "reaccion") {
        let tiempoFinal = Date.now();
        let diferencia = tiempoFinal - tiempoInicio; // Cálculo de los milisegundos 
        
        estado = "resultado";
        $(this).css('background-color', '#1ee428')
            .text('Tu tiempo: ' + diferencia + ' ms. Haz click para jugar de nuevo.');
    }
});