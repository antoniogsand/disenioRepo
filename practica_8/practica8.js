$(function(){

    const arrayImagenes = [
        "imagenes/carbonara.png",
        "imagenes/cheesecake.png",
        "imagenes/gyozas.png",
        "imagenes/Humus.png",
        "imagenes/Koko-Araisa.png"
    ]
/* la función click sale tachada porque los desarrolladores de jquery la han marcado
para eliminarla en futuras versiones. la recomendación es usar .on
La he dejado porque es funcional simplemente y la diferencia es, por lo que he visto, de sintaxis */
    $('#incluirElemento').click(function(){
        let indice = Math.floor(Math.random()*arrayImagenes.length)

        let urlImagen = arrayImagenes[indice]
        let nuevoElemento =
    `<div class="elemento-azar" style="text-align: center; border: 1px solid black; padding: 10px; margin: 5px;">
        <img src = ${urlImagen} style = "width: 200px; height: 200px">
        <br>
        <button class = "cambiarImagen" style = "width: 200px" type = "button">Cambiar</button>
        <br>
        <button class = "borrarImagen" style = "width: 200px" type = "button">Borrar</button>
    </div>
        `
        // $() es la funcion en jquery que convierte un elemento html en un objeto para poder usar métodos con él
        let $objetoNuevo = $(nuevoElemento)
        $objetoNuevo.hide()
        $('#contenedor-elementos').append($objetoNuevo)
        $objetoNuevo.fadeIn(3000)
    })

    $('#contenedor-elementos').on('click', '.borrarImagen', function(){
        // $(this) referencia al botón donde se acaba de pulsar
        // la tarjeta es el padre del botón
        $(this).parent().remove()
    })

    $('#contenedor-elementos').on('click', '.cambiarImagen', function(){
        // Elegir la nueva imagen
        let indice = Math.floor(Math.random() * arrayImagenes.length);
        let urlImagen = arrayImagenes[indice];
        $(this).siblings('img').attr('src', urlImagen)
        /*.siblings('img'): Busca al elemento img que este al mismo nivel*/
        /*.attr('src', urlImagen) Le dice al navegador que actualice el atributo src con esta nueva dirección*/
    })

    $('#cambiarColor').click (function(){
        let colorseleccionado = $('#selectorColor').val()
        $('.elemento-azar').css('background-color', colorseleccionado)
    })

    $('#resetearTodo').click (function(){
        $('#contenedor-elementos').empty()
    })

})