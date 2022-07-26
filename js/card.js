                //importante en html
const contenedorProductos = document.getElementById ('contenido-fichas')

const contenedorCarrito = document.getElementById ('carrito-contenedor')

const botonVaciar = document.getElementById ('vaciar-carrito')

const contadorCarrito = document.getElementById ('contadorCarrito')

const precioTotal = document.getElementById ('precioTotal')

                //importante en html

                //modal
function openmodal(selector){
    const el = document.querySelector(selector);
    el.classList.add("modal-opened");
}

function closemodal(selector){
    const el = document.querySelector(selector);
    el.classList.remove("modal-opened");
}
                //modal

let carrito = []

    document.addEventListener ("DOMContentLoaded", () => {
        if (sessionStorage.getItem("carrito")){
            carrito = JSON.parse(sessionStorage.getItem ("carrito"))
            actualizarCarrito ()
        }
    })

botonVaciar.addEventListener ("click", () =>{
    carrito.length = 0
    actualizarCarrito ()
})

stockProductos.forEach((producto) => {
    const div = document.createElement ('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src="${producto.imagen}" alt="">
    <h2>${producto.nombre}</h2>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio: ${producto.precio}</p>
    <button class= "btn btn-dark" id= "agregar${producto.id}" class="boton-agregar">Agregar</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })

})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {

    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito);
}
    actualizarCarrito ()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito ()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.innerHTML =`
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button class= "btn btn-dark" onclick= "eliminarDelCarrito(${prod.id})">Eliminar</button>
    `
    contenedorCarrito.appendChild(div)

    sessionStorage.setItem ("carrito", JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}