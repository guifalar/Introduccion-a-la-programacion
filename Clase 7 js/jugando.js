/*
El Javascript para la validación del formulario
pasos que vamos a realizar para esta validación.

Definiremos un evento "submit" para capturar el instante en el que el usuario enviará el formulario.
Una vez capturado el evento submit del formulario con Javascript, vamos bloquear el envío, evitando 
que pueda enviar con datos incorrectos.


document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
    document.getElementById("datos").addEventListener('submit', validarFormulario); 
    let datosFormulario = new FormData(form);
  });


 

 
    
/*Validaremos todos los campos del formulario.
Si todos los campos se validan correctamente, entonces realizaremos el envío nosotros mediante Javascript.

Entendidos los pasos que tenemos que realizar, podemos pasar a ver el código. Consta de dos partes, 
uno para la definición de los eventos 
de Javascript necesarios para enganchar nuestros majejadores para procesar el envío del formulario y 
otra parte en la que realizamos la validación propiamente dicha. 
    

  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    
    if(nombre.length == 0) {
      alert('El campo nombre es obligatorio');
      return;
    }
    if(nombre.length < "2") {
       alert('El campo nombre debe contener al menos dos caracteres');
       return;
     }
     if(nombre.length > "20") {
       alert('El campo nombre debe contener veinte caracteres como maximo');
       return;
     } 
    
     var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('El campo apellido es obligatorio');
      return;
    }
    if(apellido.length < "2") {
       alert('El campo apellido debe contener al menos dos caracteres');
       return;
     }
     if(apellido.length > "25") {
       alert('El campo apellido debe contener veinte caracteres como maximo');
       return;
     } 
    
  }*/
let parametros = new URLSearchParams(window.location.search);

let nombre = parametros.get('nombre');
let apellido = parametros.get('apellido');
let edad = parametros.get('edad');
let dni = parametros.get('dni');
let email = parametros.get('email');

document.write (nombre);

const form = document.getElementById("tablaDatos");

form.addEventListener("submit", function(event){
event.preventDefault();
let datosFormulario = new FormData(form);


let tablaDatosRef = document.getElementById("tablaDatos");

let nuevaFila = tablaDatosRef.insertRow(-1);

let datosRef= nuevaFila.insertCell(0);
datosRef.textContent = datosFormulario.get("nombre");


datosRef= nuevaFila.insertCell(1);
datosRef.textContent = datosFormulario.get("apellido");

datosRef= nuevaFila.insertCell(2);
datosRef.textContent = datosFormulario.get("edad");

datosRef= nuevaFila.insertCell(3);
datosRef.textContent = datosFormulario.get("dni");

datosRef= nuevaFila.insertCell(4);
datosRef.textContent = datosFormulario.get("email");
})
