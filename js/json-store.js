
let tareas = []

const aggBoton = document.getElementById ("agregar")
const numeroInput = document.getElementById ("cant")
const tarDiv = document.getElementById ("tareas")

function aggTarea (numeroInput) {
    tareas.push ({numeroInput})
    impTarea ()
    sincTienda ()
}

function impTarea () {
    tarDiv.innerHTML = ''
    tareas.forEach (t => {
        const li = document.createElement('li')
        li.innerText = `${t.numeroInput}`
        tarDiv.append( li )
    })
}

function sincTienda () {
    localStorage.setItem ("tareas", JSON.stringify(tareas))
}

function leerTienda () {
    const tareaJson = localStorage.getItem("tareas")
    const tareaLocalStorage = JSON.parse(tareaJson)
    tareas = tareas.concat (tareaLocalStorage)
    impTarea ()
}

aggBoton.addEventListener('click', function() {
    aggTarea (numeroInput.value)
})

leerTienda ()
