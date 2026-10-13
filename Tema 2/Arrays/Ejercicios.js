
let array = ["Leche", "Cafe", "Te", "Miel"];

function ej1() {
    let cadena = "Buenos dias";
    let cadena_guiones = "";
    for (let index = 0; index < cadena.length; index++) {
        cadena_guiones += cadena[index];
        if (index < cadena.length - 1 && cadena[index] != " ") {
            cadena_guiones += "-";
        }

    }

    alert(cadena_guiones);
}

function ej2() {
    let cadena = "Buenos dias";
    let cadena_Array  = cadena.split(" ");

    cadena_Array.forEach((cadena, indice) => {
        alert(`en el índice ${indice} del array está la cadena ${cadena}. `)
    })


    
}

function ej3() {
    // Parte 2: Mostrar array bidireccional con los elementos separados por un # y mostrando el indice
    const anidado1 = ["anidado1", "anidado2", "anidado3"];
    const anidado2 = ["a1", "a2", "a3"];
    const matriz = [anidado1, anidado2];

    
    for (const matrices in matriz) {
        alert(`Indice ${matrices}: ${matriz[matrices].join("#")}`)
    }
    // Primera parte: Mostrar array "anidado1" por pantalla mediante un # como separador 
    // alert(anidado1.join("#"))

}

function ej4(){
    const anidado1 = ["anidado1", "anidado2", "anidado3"];
    let array_desordenado = "";

    while(anidado1.length > 0){
        array_desordenado+= anidado1.pop() + " ";
    }

    alert(array_desordenado);
}

function ej5(){
    const array = ["banana", "naranja", "mango", "limon"];

    let pregunta = prompt("¿Que fruta quieres buscar?");

    let encontrado = false;

    for (let index = 0; index < array.length; index++) {
        if(array[index] == pregunta.toLowerCase()){
            alert(`Se encontro el elemento ${array[index]}`)
            encontrado = true;
        }
    }

    if(encontrado == false){
        alert("No se encontro el elemento");
    }
}
function ej6() {
    let cadena = "miel";
    let primer_caracter = cadena.substring(0,1).toUpperCase();
    alert(primer_caracter + cadena.substring(1));
}

function ej7() {
    alert("Vas a añadir carne y leche a la lista");
    if(array.includes("Azucar") || array.includes("Carne")){
        alert("Estos productos YA estaban en la lista");
    } else {
        array.unshift("Carne");
        array.push("Azucar");
        alert("Los productos se agregaron correctamente");
        
    }

   
}


function ej8() {
    let alergia = prompt("Indica el producto a eliminar por riesgo de alergia");

    if(!array.includes(alergia)){
        alert("No se encuentras el producto indicado");
    } else {
        let posicion = array.indexOf(alergia);
        array.splice(posicion, 1);

    }
}
function ej9() {
     let buscar = prompt("Indica el producto a buscar");
    if(array.includes(buscar)){
        let modificara = prompt("Nuevo producto");
        let indice = array.indexOf(buscar);
        array.splice(indice, 1, modificara)
      //array.splice (indice, cuantos elementos vas a eliminar, por que lo vas a sustituir)
    }
}
function ej10() {
    alert(array.join(","))
}
function ej11() {

}
function ej12() {

}
function ej13() {

}
function ej14() {

}
function ej15() {

}
function ej16() {

}

