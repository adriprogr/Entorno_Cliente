function ej1() {
    let num1 = 5;
    let resultado = num1 = 3;
    resultado = num1 == 3;
}

function ej2() {
    let v1 = 2;
    let v2 = 4;
    let v3 = 5;

    let operacion = v1 * v2 + v3;
    let operacion2 = v1 + v2 * v3;

    console.log(operacion);
    console.log(operacion2);
}

function ej3() {
    let a = 5;
    a /= 2;
    a += 1;
    a *= 3
    a--;
    a++;
}

function ej4() {
    let numeros = prompt("Introduce tres numeros");

    let array = numeros.split(" ");

    let uno = Number(array[0]);
    let dos = Number(array[1]);
    let tres = Number(array[2]);

    let operacion = (uno + dos + tres) / 3;

    alert("La media es " + operacion);
}

function ej5() {
    let millas = prompt("Indica una cantidad de millas nauticas");
    let operacion = parseInt(millas) * 1852;
    alert(millas + " equivale a " + operacion + " metros");
}

function ej6() {
    let a = 5;
    let b = a++;

    let a1 = 5;
    let b1 = ++a1;

    alert(`${a} + " " + ${b}`);
    alert(`${a1} + " " + ${b1}`);
}

function ej7() {
    let foo = 'hola';
    console.log(parseInt(foo));
}

function ej8(){
    alert(`Esto es un trexto con "comillas dobles" y 'comillas simples'\n y ademas , formado por varias lineas`)
}

function ej9(){
    let min = 1000;
    let max = 9999;
    let operacion = Math.floor(Math.random() * (max - min + 1)) + min;
    let cadena = `DESC- ${operacion}`;

    alert(cadena)

}

