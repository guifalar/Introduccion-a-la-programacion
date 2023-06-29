
function agregarTarea() {
    let input = document.querySelector("input");
    // Accedemos al atributo value (valor)
    let tarea = input.value;
    let ul = document.querySelector("ul");
    ul.innerHTML += "<li>" + tarea + "</li>";
    let parrafo = document.querySelector("p");
document.body.removeChild(parrafo);
let subTitulo = document.createElement("h2");
subTitulo.innerText = "Este es el subtítulo";
document.body.appendChild(subTitulo);
   }