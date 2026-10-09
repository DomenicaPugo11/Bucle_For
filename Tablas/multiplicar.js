function generarTablas(){
    let contenedor=document.getElementById("contenedor");
    contenedor.innerHTML = "<h1>PROBANDO</h1>";
    let contenido="";
    let multiplicacion=1;
    for (let i=1;i<=10;i++){
        multiplicacion=i*5;
        contenido=contenido+"<P>"+ i +"X5=" + multiplicacion + "</p>"

    }
    contenedor.innerHTML = contenido;
}