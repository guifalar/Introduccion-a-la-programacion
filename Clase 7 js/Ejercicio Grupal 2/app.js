function copiar(num1, num2) {
    var num1, num2;
    num1 = document.getElementById("valor").value;
    num2 = document.getElementById("valor2").value;

    if( num1 == null || num1.length == 0 || /^\s+$/.test(num1)|| num1== "" ) {
        document.getElementById("resultado").innerHTML = "debe completar el primer campo";
    return false;
    }
    if( num2 == null || num2.length == 0 || /^\s+$/.test(num2) ) {
        document.getElementById("resultado").innerHTML = "debe completar el segundo campo";
    return false;
    }
    if (isNaN(parseInt(num1))) {
        alert("El primer campo debe ser un numero");
        return false;
      }  
    if (isNaN(parseInt(num2))) {
        alert("El segundo campo debe ser un numero");
        return false;
    }  
    
    document.getElementById("resultado").innerHTML = "Numero 1: " + num1  ;   
    num2 = document.getElementById("valor2").value;
    document.getElementById("resultado2").innerHTML = "Numero 2: " + num2  ;
    document.getElementById("datos").reset();
}

   function suma(num1, num2) {

        var num1, num2;
        num1 = document.getElementById("valor").value;
        num2 = document.getElementById("valor2").value;

            if( num1 == null || num1.length == 0 || /^\s+$/.test(num1)|| num1== "" ) {
                document.getElementById("resultado").innerHTML = "debe completar el primer campo";
            return false;
            }
            if( num2 == null || num2.length == 0 || /^\s+$/.test(num2) ) {
                document.getElementById("resultado").innerHTML = "debe completar el segundo campo";
            return false;
            }
            if (isNaN(parseInt(num1))) {
                alert("El primer campo debe ser un numero");
                return false;
              }  
            if (isNaN(parseInt(num2))) {
                alert("El segundo campo debe ser un numero");
                return false;
            }  

        var sumado = parseInt(num1) + parseInt(num2);
        document.getElementById("resultado").innerHTML = "la suma de " + num1 + " + " + num2 + " = " +
        sumado
        document.getElementById("datos").reset();

       
    }
    function resta(num1, num2) {
        var num1, num2;
        num1 = document.getElementById("valor").value;
        num2 = document.getElementById("valor2").value;
        
        if( num1 == null || num1.length == 0 || /^\s+$/.test(num1)|| num1== "" ) {
            document.getElementById("resultado").innerHTML = "debe completar el primer campo";
        return false;
        }
        if( num2 == null || num2.length == 0 || /^\s+$/.test(num2) ) {
            document.getElementById("resultado").innerHTML = "debe completar el segundo campo";
        return false;
        }
        if (isNaN(parseInt(num1))) {
            alert("El primer campo debe ser un numero");
            return false;
          }  
        if (isNaN(parseInt(num2))) {
            alert("El segundo campo debe ser un numero");
            return false;
        }  
        var restando = parseInt(num1) - parseInt(num2);
        document.getElementById("resultado").innerHTML = "la resta de " + num1 + " - " + num2 + " = " +
        restando
        document.getElementById("datos").reset();


       
    }
    function producto(num1, num2) {
        var num1, num2;
        num1 = document.getElementById("valor").value;
        num2 = document.getElementById("valor2").value;
        if( num1 == null || num1.length == 0 || /^\s+$/.test(num1)|| num1== "" ) {
            document.getElementById("resultado").innerHTML = "debe completar el primer campo";
        return false;
        }
        if( num2 == null || num2.length == 0 || /^\s+$/.test(num2) ) {
            document.getElementById("resultado").innerHTML = "debe completar el segundo campo";
        return false;
        }
        if (isNaN(parseInt(num1))) {
            alert("El primer campo debe ser un numero");
            return false;
          }  
        if (isNaN(parseInt(num2))) {
            alert("El segundo campo debe ser un numero");
            return false;
        }  
        var producto = parseInt(num1) * parseInt(num2);
        document.getElementById("resultado").innerHTML = "el producto de " + num1 + " * " + num2 + " es " +
        producto;
        document.getElementById("datos").reset();

       
    }

    function cociente(num1, num2) {
        var num1, num2;
        num1 = document.getElementById("valor").value;
        num2 = document.getElementById("valor2").value;
        if( num1 == null || num1.length == 0 || /^\s+$/.test(num1)|| num1== "" ) {
            document.getElementById("resultado").innerHTML = "debe completar el primer campo";
        return false;
        }
        if( num2 == null || num2.length == 0 || /^\s+$/.test(num2) ) {
            document.getElementById("resultado").innerHTML = "debe completar el segundo campo";
        return false;
        }
        if (isNaN(parseInt(num1))) {
            alert("El primer campo debe ser un numero");
            return false;
          }  
        if (isNaN(parseInt(num2))) {
            alert("El segundo campo debe ser un numero");
            return false;
        }   
        var cociente = parseInt(num1) / parseInt(num2);
        if( num2 != 0) 
        {document.getElementById("resultado").innerHTML = "el cociente de " + num1 + " y " + num2 + " es " +
        cociente}
         else
        {document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
        document.getElementById("datos").reset();

    }

    }
    document.getElementById("datos").reset();

    



