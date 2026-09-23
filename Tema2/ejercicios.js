function ej1(){
    const cadena = prompt("Escribe una cadena");
    alert("La longitud de la cadena es igual a " + cadena.length);
}

function ej2(){
    const secreta = prompt("Escribe la palabra 'SECRETA'");
    if(secreta.toLowerCase() == "secreta"){
        alert("Has acertado");
    } else {
        alert("No has acertado. Intentalo de nuevo");
    }
}

function ej3(){
    const cadena = "Hola que tal yo estoy bien";
    alert(cadena.slice("9"));
}

function ej4(){
   const dni = prompt("Introduce DNI");
   const relleno = dni.padStart(8, 0);
   alert(relleno); 
}

function ej5(){
    const cadena = prompt("Escriba una frase");
    const array = cadena.split(" ");
    alert("La frase tiene " + array.length + " palabras");
}

