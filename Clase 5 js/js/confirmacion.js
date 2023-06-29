
    //tomamos de la url los parametros pasados desde el formulario
    let parametros = new URLSearchParams(window.location.search);

    //declaro variable por cada uno de los parametros que recibo del formulario
    let apellido = parametros.get('apellido');
    let nombre = parametros.get('nombre');
    let cantidad = parametros.get('cantidad');

    const precio = 500;

    //Acceder a elementos del documento
    document.getElementById('datos').innerHTML = "tus datos "+nombre+" "+apellido;
    document.getElementById('total').innerHTML = "$ " + precio * cantidad;
