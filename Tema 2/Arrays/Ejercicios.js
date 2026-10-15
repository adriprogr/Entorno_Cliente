
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

function Añadir() {
    alert("Vas a añadir carne y leche a la lista");
    if(array.includes("Azucar") || array.includes("Carne")){
        alert("Estos productos YA estaban en la lista");
    } else {
        array.unshift("Carne");
        array.push("Azucar");
        alert("Los productos se agregaron correctamente");
        
    }

   
}


function Eliminar() {
    let alergia = prompt("Indica el producto a eliminar por riesgo de alergia");

    if(!array.includes(alergia)){
        alert("No se encuentras el producto indicado");
    } else {
        let posicion = array.indexOf(alergia);
        array.splice(posicion, 1);

    }
}
function Modificar() {
     let buscar = prompt("Indica el producto a buscar");
    if(array.includes(buscar)){
        let modificara = prompt("Nuevo producto");
        let indice = array.indexOf(buscar);
        array.splice(indice, 1, modificara)
      //array.splice (indice, cuantos elementos vas a eliminar, por que lo vas a sustituir)
    }
}
function mostrar() {
    alert(array.join(","))
}
function ej8_mio() {
    let array_numeros = [];
    let pedir_numero = parseInt(prompt("Di un numero"));
    array_numeros.unshift(pedir_numero);
    let contador = 0;
    
    while(contador < 5){
        pedir_numero = parseInt(prompt("Di un numero"));
        array_numeros.push(pedir_numero);
        contador++;
    }

    let numeros_inversos = "";

    for (let index = array_numeros.length - 1; index >= 0; index--) {
        numeros_inversos+= array_numeros[index] + " ";
        
    }

    alert(numeros_inversos)


}
function ej8() {
    let array_numeros = [];
    
    let numeros_inversos = "";

    let tamaño = 6;

    
    for (let index = 0; index < tamaño; index++) {
        let numeros = prompt("Pon un numero")
        array_numeros.push(numeros);
        
    }

    for (let index = array_numeros.length - 1; index >= 0; index--) {
        numeros_inversos+= array_numeros[index] + " ";
        
    }

    alert(numeros_inversos)


}
function ej9() {
    let array_numeros = [];
    let numeros_introducir = parseInt(prompt("¿Cuantos numeros deseas mostrar?"));
    let pedir_numero;
    
    for (let index = 0; index < numeros_introducir; index++) {
        pedir_numero = parseInt(prompt(`${index + 1}º numero`));
        array_numeros.push(pedir_numero);
        
    }

     let suma_numeros = 0;
    
    for (let index = 0; index < array_numeros.length; index++) {
        suma_numeros+= array_numeros[index];        
    }

    let media = suma_numeros / array_numeros.length;

    let mayor_media = array_numeros.filter(array_numeros => array_numeros > media);

    alert(media);
    
    alert(mayor_media);

    





    // let array_numeros = [];
    // let repeticiones = parseInt(prompt("¿Cuantos numeros deseas mostrar?"));
    // let contador_repeticiones = 0;
    // let pedir_numero;
    // while(contador_repeticiones < repeticiones){
    //     pedir_numero = parseInt(prompt(`${contador_repeticiones + 1}º numero`));
    //     array_numeros.push(pedir_numero);
    //     contador_repeticiones++;
    // }

    // let suma_numeros = 0;
    
    // for (let index = 0; index < array_numeros.length; index++) {
    //     suma_numeros+= array_numeros[index];        
    // }


    // let operacion = suma_numeros / array_numeros.length;

    // alert(`La media de los numeros es ${operacion}`);

    
}


function ej10() {
    let array_numeros = [];
    let suma_numeros = 0;
    for (let index = 0; index < 100; index++) {
        array_numeros.push(index + 1);
        suma_numeros+= array_numeros[index];
    }
    
    let operacion = suma_numeros / array_numeros.length;


    alert(`La media de los numeros es igual a ${operacion}`)

}

function ej11() {
    let numeros = [];
    let suma_numeros = 0;

    for (let index = 0; index < 10; index++) {
        let pedir_numero = parseInt(prompt(`Escribe el${index + 1}º numero`));
        numeros.push(pedir_numero);
        suma_numeros+= numeros[index];        
    }
    
    let media = suma_numeros / numeros.length;
    let numeros_mayores_media = "";

    for (const numero of numeros) {
        if(numeros[numero] > media){
            numeros_mayores_media+= numeros[numero] + " ";
        }
    }
    alert(`Los numeros mayores a la media son ${numeros_mayores_media}`);
}
function ej12() {
    let entradas = "";
    let nombres = [];
    do{
        entradas = prompt("Nombre");
        nombres.push(entradas);

    } while(entradas.trim() !== "");

    alert(`Nombres${nombres.sort()}`);
}
function ej13() {
    let matriz = [];
    let longitud_matriz = parseInt(prompt("Tamaño de la matriz"));
    for(let i = 1; i <= longitud_matriz; i++){
        let array = [];
        for(let j = 1; j<= longitud_matriz; j++){
            let valor = parseInt(prompt(`Dime el valor de la fila ${i} columna ${j}`));
            array.push(valor);
        }
        matriz.push(array);
    }


    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            alert(`En la fila ${i + 1} columna ${j + 1} esta el valor ${matriz[i][j]}`)
        }
    }
    
}

function ej14(){
    let nota = parseInt(prompt("Indica una nota"));
    switch(true){
        case (nota >= 0 && nota < 3):
            alert("Muy deficiente");
            break;
        case (nota >= 3 && nota < 5):
            alert("Insuficiente");
            break;
        case (nota >=5 && nota < 6):
            alert("Suficiente");
            break;
        case (nota >=6 && nota < 7):
            alert("Bien");
            break;
        case (nota >= 7 && nota < 9):
            alert("Notable");
            break;
        case (nota >= 9 && nota < 10):
            alert("Sobresaliente");
            break;
        default: 
            alert("Nota erronea");
    }
}

function ej15(){
    let numero1 = 2;
    let numero2 = 6;
    let numeros_impares = "";
    for (let index = numero1; index <= numero2; index++) {
        if(index % 3 == 0 ){
            if(numero2 - numero1 == 0 || numero2 - numero1 == 1){
                numeros_impares+=index + "-";
            } else {
                numeros_impares += index;
            }   
        }
}

    alert(numeros_impares);
}



