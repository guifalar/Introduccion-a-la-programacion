//Declaro la funcion que ejecuta el codigo de js

  function validarFormulario(){
//tomamos de la url los parametros pasados desde el formulario
   let parametros = new URLSearchParams(window.location.search);

//declaro la variable nombre
   let nombre = parametros.get('nombre');
   nombre = document.getElementById("nombre").value;
//valido que el campo nombre sea obligario, y tenga como maximo 20 caracteres y como minimo 2 caracteres.   
    if( nombre == null|| nombre== "" ) {
      alert("El campo nombre es obligatorio");
    return false;
    }
   var Max_Length = 20;
   var length = nombre.length
   if (length > Max_Length) {
     alert("El nombre ingresado debe contener como maximo 20 caracteres");
     return false;
   }
   var Min_Length = 2;
   var length = nombre.length;
   if (length < Min_Length) {
     alert("El nombre ingresado debe contener al menos 2 caracteres");
     return false;
   }

   //declaro la variable apellido
   let apellido = parametros.get('apellido');
   apellido = document.getElementById("apellido").value;
  //valido que el campo apellido sea obligario, y tenga como maximo 20 caracteres y como minimo 2 caracteres.   
    if( apellido == null || apellido== "" ) {
      alert("El campo apellido es obligatorio");
    return false;
    }
   var Max_Length = 25;
   var length = apellido.length
   if (length > Max_Length) {
     alert("El apellido ingresado debe contener como maximo 25 caracteres");
     return false;
   }
   var Min_Length = 2;
   var length = apellido.length;
   if (length < Min_Length) {
     alert("El apellido ingresado debe contener al menos 2 caracteres");
     return false;
   }

   //declaro la variable edad
   let edad = parametros.get('edad');
   edad = document.getElementById("edad").value;
   //Valido que el campo edad sea obligatorio, numerico, y acepte entre 18 y 120 años
   if( edad == null|| edad== "" ) {
    alert("El campo edad es obligatorio");
  return false;
  }
   if (isNaN(parseInt(edad))) {
    alert("El campo edad debe ser un numero");
    return false;
  }  
  if (edad < 18) {
    alert("La edad es a partir de los 18 años ");
    return false;
  }  
  if (edad>120) {
    alert("La edad es de 120 como maximo ");
    return false;
  }  

 //declaro la variable dni
 let dni = parametros.get('dni');
 dni = document.getElementById("dni").value;
//valido que el campo dni sea obligario, y tenga como minimo 7 caracteres.   
  if( dni == null|| dni== "" ) {
    alert("El campo nombre es obligatorio");
  return false;
  }
 var Min_Length = 7;
 var length = dni.length;
 if (length < Min_Length) {
   alert("El dni ingresado debe contener al menos 7 caracteres");
   return false;
 }

 //declaro la variable email
 let email = parametros.get('email');
 email = document.getElementById("email").value;

 if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ .test(email)){
  console.log("La dirección de email " + email + " es correcta.");
 } else {
  alert("La dirección de email es incorrecta."); return false}



//Codigo en el que se arma la tabla dinamica
    const form = document.getElementById("datos");
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

    //blanqueo los campos

    document.getElementById("datos").reset();
      return
    }
    
    

  

    