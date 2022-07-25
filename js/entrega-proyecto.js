function Tienda () {
    let comprador = prompt ("Bienvenido a tienda magica (El Santuario); ¿Desea comprar algun producto?; Responda con un si o no: ")

    while (comprador != "si" && comprador != "no") {
        alert ("Por favor ingrese una respuesta valida");
        comprador = prompt ("Bienvenido a tienda magica (El Santuario); ¿Desea comprar algun producto?; Responda con un si o no: ")
    }

    if (comprador == "si"){
        //Contenido ()
        console.log ("Bievenido al Stock");
        aggCarrito (3)
        verCarrito ()
    }

    else if (comprador == "no"){
        alert ("Gracias por su visita")
    }
}

    const stock = [
    {id:1, pocion: "Amor", precio: 80, stock: 35},
    {id:2, pocion: "Clarividencia", precio: 150, stock: 12},
    {id:3, pocion: "Muerte Instantanea", precio: 500, stock: 10},
    {id:4, pocion: "Resurreción", precio: 900, stock: 3}
]

const carrito = []

function aggCarrito ( id ) {
    const producto = stock.find( p => p.id == id )
    carrito.push( {id: producto.id, nombre: producto.pocion, precio: producto.precio} )
}

function verCarrito() {
    carrito.forEach( p => {
        console.log ( p );
    }
    )
}


Tienda ()