/* Escribe un programa que pida al usuario dos números. 
      Usa esos 2 números en una función que divide el primero por el segundo
      y devuelve el resultado. Muestra el resultado que devuelve la función 
      en un alert. Después vuelve a pedir los números y hacer todo otra vez 
      hasta que el usuario introduzca un 0 como segundo número. */

let n2;
let n1;
//pongo do while por que se ejecuta al menos 1 vez 
do {
    n1 = prompt("pon numero");
    n2 = prompt("pon numero2");
    if (n2 != 0) {
        alert("la division de lo s numeros es: " + division(n1, n2));
    }
    else {
        alert("entre 0?!?!?!?!?!?!?!?!");
    }
} while (n2 != 0);

function division(numero1, numero2) {
    return numero1 / numero2;
}