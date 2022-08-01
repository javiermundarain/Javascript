let padre = document.getElementById ("list");

let personas = [ "Tulio", "Cabello", "Marques", "Sad"];

for (const persona of personas){
    let li = document.createElement ("li");
    li.innerHTML = persona
    padre.append(li);
}