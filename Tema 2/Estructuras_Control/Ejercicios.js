function ej1() {
    const par = parseInt(prompt("Numero"));
    if (par % 2 == 0) {
        alert("El numero es par");
    } else {
        alert("Es impar");
    }
}

function ej2() {
    const numero1 = parseInt(prompt("Primer numero"));
    const numero2 = parseInt(prompt("Segundo numero"));

    if (numero1 > numero2) {
        alert("El primer numero es mayor que el segundo");
    } else {
        alert("El segundo numero es mayor que el primero");
    }
}

function ej3() {
    const numero1 = parseInt(prompt("Primer numero"));
    const numero2 = parseInt(prompt("Segundo numero"));

    if (numero1 % numero2 == 0) {
        alert(`${numero1} si es multiplo de ${numero2}`);
    } else {
        alert(`${numero1} no es multiplo de ${numero2}`);
    }
}

function ej4() {
    const numero1 = parseInt(prompt("Primer numero"));
    const numero2 = parseInt(prompt("Segundo numero"));

    const operacion = numero1 / numero2;

    if (numero2 != 0) {
        alert(`El resultado de la operacion es ${operacion}`);
    } else {
        alert("No se puede dividir entre 0");
    }
}

function ej5() {
    const numero1 = parseInt(prompt("Primer numero"));
    const numero2 = parseInt(prompt("Segundo numero"));

    if (numero1 > numero2) {
        alert(`${numero1} es mayor a ${numero2}`);
    } else if (numero2 > numero1) {
        alert(`${numero2} es mayor a ${numero1}`);
    } else {
        alert("Los numeros son iguales");
    }
}
function ej6() {
    let menor_mayor = "";
    let mayor_menor = "";

    for (let index = 10; index <= 20; index++) {
        menor_mayor += index + " ";

    }

    for (let index = 20; index >= 10; index--) {
        mayor_menor += index + " ";

    }


    alert(menor_mayor);
    alert(mayor_menor);
}
function ej7() {
    let numeros = "";
    let numero = 0;
    while (numero < 50) {
        if (numero % 3 == 0) {
            numeros += numero + " ";
            numero++;
        } else {
            numero++;
        }
    }

    alert(numeros);
}
function ej8() {
    let numeros = "";
    for (let index = 100; index < 200; index++) {
        if (index % 7 == 0 && index % 3 == 0) {
            numeros += index + " ";
        }

    }

    alert(numeros);
}
function ej9() {
    let tabla = "";
    const numero = 9;

    for (let index = 0; index <= 10; index++) {
        tabla += `${numero} x ${index} = ${numero * index} \n`;
    }

    alert(tabla);
}
function ej10() {
    let numeros = "";
    let contador = 0;
    let numero = 1;
    while (contador < 8) {
        if (numero % 2 == 0) {
            numeros += numero + " ";
            contador++;
            numero++;
        } else {
            numero++;
        }
    }

    alert(numeros);
}
function ej11() {
    let numeros = "";
    for (let index = 15; index >= 5; index--) {
        numeros += index + " ";
    }

    alert(numeros);
}
function ej12() {
    let asteriscos = "";
    let alto = parseInt(prompt("indica el alto"));
    let ancho = parseInt(prompt("indica el ancho"));
    for (let index = 0; index < alto; index++) {
        for (let j = 0; j < ancho; j++) {
            asteriscos += "*";
        }
        asteriscos += "\n";

    }

    alert(asteriscos);

}
function ej13() {
    let asteriscos = "";
    let alto = parseInt(prompt("indica el alto"));
    let ancho = parseInt(prompt("indica el ancho"));

    for (let index = 0; index < alto; index++) {
        for (let j = 0; j < ancho; j++) {
            if (j == index) {
                asteriscos += "O";
            } else {
                asteriscos += "*";
            }
        }

        asteriscos += "\n";
    }

    alert(asteriscos);

}
function ej14() {
    let contador = 0
    let usuario = prompt("Introduzca Usuario");
    let contraseña = prompt("Introduzca contraseña");
    while (contador < 3) {
        
        if (usuario == "alibaba" && contraseña == "sesamo") {
            alert("Has acertado");
            break;
        } else {
            alert("Contraseña o usuario incorrecto/a");
            contador++;
        }

        usuario = prompt("Introduzca Usuario");
        contraseña = prompt("Introduzca contraseña");
    }

    if (contador == 3) {
        alert("Los datos introducidos no son correctos")
    }

}
function ej15() {
    let numero = parseInt(prompt("Introduce un numero"));

    while(numero != 0){
        alert(Math.pow(2, numero));
        numero = prompt("Introduce un numero");

    }

    if(numero == 0){
        alert("El numero no puede ser igual a 0");
    }
}
function ej16() {
    let numero = 0;
    do {
        alert(numero);
        numero++;
        
    } while (numero <= 10)
}

