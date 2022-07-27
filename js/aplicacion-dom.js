
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