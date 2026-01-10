const imagenes= [
    "imagenes/carbonara.png",
    "imagenes/cheesecake.png",
    "imagenes/gyozas.png",
    "imagenes/Humus.png",
    "imagenes/Koko-Araisa.png"
]

let contenedor = document.querySelector('#contenedor-elementos')
let incluirElemento = document.querySelector('#incluirElemento')
let cambiarColor = document.querySelector('#cambiarColor')
let resetear = document.querySelector('#resetearTodo')


incluirElemento.addEventListener('click', () =>{
    let indiceAzar = Math.floor(Math.random()*imagenes.length)
    let urlImagen = imagenes[indiceAzar]
    let tarjeta = document.createElement('div')
    tarjeta.style.cssText = 'display: flex; flex-direction: column; gap: 3px; border: solid 1px black'
    tarjeta.classList.add('elemento-azar')
    let imagen = document.createElement('img')
    imagen.src = urlImagen
    imagen.style.width = '200px';
    imagen.style.height = '200px';
    tarjeta.appendChild(imagen)
    let botonCambiar = document.createElement('button')
    botonCambiar.textContent= 'cambiar imagen'
    botonCambiar.style.width = '200px'
    botonCambiar.classList.add('cambioImagen')
    botonCambiar.addEventListener('click', () =>{
        let nuevaImagen = Math.floor(Math.random()*imagenes.length)
        let urlImagen = imagenes[nuevaImagen]
        imagen.src = urlImagen
    })
    tarjeta.appendChild(botonCambiar)
    let botonBorrar= document.createElement('button')
    botonBorrar.textContent= 'borrar'
    botonBorrar.style.width = '200px'
    botonBorrar.classList.add('borrarImagen')
    botonBorrar.addEventListener('click', () =>{
        tarjeta.remove()
    })
    tarjeta.appendChild(botonBorrar)
    contenedor.appendChild(tarjeta)
    tarjeta.style.textAlign= 'center'
})

cambiarColor.addEventListener('click', () => {
    let guardoColor = document.querySelector('#selectorColor').value
    let todasLasTarjetas = document.querySelectorAll('.elemento-azar') //si quiero que solo cambie el color de la imagen tengo que añadir img y sería así .elemento-azar img
    todasLasTarjetas.forEach(tajeta => {
        tajeta.style.backgroundColor = guardoColor
    })
})

resetear.addEventListener('click', () => {
    contenedor.innerHTML = ''
})