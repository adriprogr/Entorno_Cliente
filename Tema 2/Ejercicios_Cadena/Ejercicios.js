function ej1(){
    const cadena = prompt("Escribe una cadena");
    alert(cadena.length)
}

function ej2(){
    const cadena = prompt("Escribe Secreta");
    if(cadena.toLowerCase() == "secreta"){
        alert("Has acertado");
    } else {
        alert("No has acertado");
    }
}

function ej3(){
    const cadena = "Hola que tal yo bien";

    const posicion = cadena.indexOf("tal");
    alert(cadena.substring(posicion));
}

function ej4(){
    let dni = prompt("Introduce DNI");
    dni = dni.padStart(7, 0);
    alert(dni);
}

function ej5(){
    let dni = prompt("Introduce DNI");
    let cadenas = dni.split(" ");
    alert(cadenas.length);
}