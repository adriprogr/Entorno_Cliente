function ej1() {
    const numero = parseInt(prompt("Indica un numero para saber si es par"));
    if (numero % 2 == 0) {
        alert(`El numero ${numero} es par`);
    } else {
        alert(`El numero ${numero} no es par`);
    }

}

function ej2() {
    const numero1 = parseInt(prompt("Indica el primer numero"));
    const numero2 = parseInt(prompt("Indica el segundo numero"));

    if (numero1 > numero2) {
        alert(`${numero1} es mayor que ${numero2}`);
    } else if (numero2 > numero1) {
        alert(`${numero2} es mayor que ${numero1}`);
    }
}

function ej3() {
    const numero1 = parseInt(prompt("Indica el primer numero"));
    const numero2 = parseInt(prompt("Indica el segundo numero"));

    if (numero1 % numero2 === 0) {
        alert(`${numero1} es multiplo de ${numero2}`);
    } else {
        alert(`${numero1} no es multiplo de ${numero2}`);
    }
}


function ej4() {
    const numero1 = parseInt(prompt("Indica el primer numero"));
    const numero2 = parseInt(prompt("Indica el segundo numero"));

    const operacion = numero1 / numero2;
    if (numero2 !== 0) {
        alert(`El resultado de dividir ${numero1} entre ${numero2} es ${operacion}`);
    } else {
        alert(`Error: No se puede dividir entre cero`);
    }
}

function ej5() {
    const numero1 = parseInt(prompt("Indica el primer numero"));
    const numero2 = parseInt(prompt("Indica el segundo numero"));

    if (numero1 > numero2) {
        alert(`${numero1} es mayor que ${numero2}`);
    } else if (numero2 > numero1) {
        alert(`${numero2} es mayor que ${numero1}`);
    } else {
        alert(`${numero1} es igual a ${numero2}`);
    }
}

function ej6() {
    let numeros_ascendente = "";
    let numeros_descendente = "";
    for (let index = 10; index <= 20; index++) {
        numeros_ascendente += index;

        if (index < 20) {
            numeros_ascendente += ", ";
        }

    }
    for (let index = 20; index >= 10; index--) {
        numeros_descendente += index;

        if (index > 10) {
            numeros_descendente += ", ";
        }
    }


    alert(`Orden Ascendente: ${numeros_ascendente}\n Orden Descendente: ${numeros_descendente}`);
}

function ej7() {
    let multiplos = "";

    for (let index = 1; index < 50; index++) {
        
        if (index % 3 == 0) {
            multiplos += index + " ";
    
            
        }
    }
    
    alert(multiplos);
}


