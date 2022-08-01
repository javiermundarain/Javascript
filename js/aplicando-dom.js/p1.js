
const stock = [
    {id:1, pocion: "Amor", precio: 80, stock: 35},
    {id:2, pocion: "Clarividencia", precio: 150, stock: 12},
    {id:3, pocion: "Muerte Instantanea", precio: 500, stock: 10},
    {id:4, pocion: "Resurreción", precio: 900, stock: 3}
]
                    //APLICACION DE DOM                           
function Contenido () {
            
    const root = document.getElementById('root')
    root.innerHTML = ''

    stock.forEach (p => {
        const element = document.createElement ('li')
        element.innerHTML = `Poción: ${p.pocion} / <strong> Precio: ${p.precio}<strong> / Stock: ${p.stock}`
        root.append ( element )
});}
                    //APLICACION DE DOM

Contenido ()