function Tienda () {
    let comprador = prompt ("Bienvenido a tienda magica (El Santuario); ¿Desea comprar algun producto?; Responda con un si o no: ")

    while (comprador != "si" && comprador != "no") {
        alert ("Por favor ingrese una respuesta valida");
        comprador = prompt ("Bienvenido a tienda magica (El Santuario); ¿Desea comprar algun producto?; Responda con un si o no: ")
    }

    if (comprador == "si"){
        //Contenido ()
        console.log ("Bievenido al Stock")
        inventario ()
        
    }

    else (comprador == "no");
        alert ("Gracias por su visita");
}
                                //APLICACION DE ARRAYS)
    const stock = [
    {pocion: "Amor", precio: 80, stock: 35},
    {pocion: "Clarividencia", precio: 150, stock: 12},
    {pocion: "Muerte Instantanea", precio: 500, stock: 10},
    {pocion: "Resurreción", precio: 900, stock: 3},
]
function inventario () {
    for (const item of stock) {
         console.log ("<h2>" + item.pocion + item.precio + item.stock + "</h2>" )
        }
    }
                                //APLICACION DE ARRAYS)

                                    //APLICACION DE BUCLES)
//function Contenido () {
    //let obj1 = parseInt (prompt ("Pocion de Amor"));
    //let obj2 = parseInt (prompt ("Pocion de Clarividencia"));
    //let obj3 = parseInt (prompt ("Pocion de Pocion de Muerte"));
    //let obj4 = parseInt (prompt ("Pocion de Pocion de Resurreción"));

        //let resultado = obj1 + obj2 + obj3 + obj4;
            //alert ("Su total de productos es: " + resultado);}

                                    //APLICACION DE BUCLES)

Tienda ()