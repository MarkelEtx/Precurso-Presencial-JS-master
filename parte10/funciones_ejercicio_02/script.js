/*Escribe una función a la que le damos dos números 
    y que devuelva true si el primer número es más grande 
    que el segundo número y false en el caso contrario. 
    Pide dos números al usuario, y pásalos a la función. 
    Muestra en consola “El primer número es más grande” o 
    “El primer número no es más grande”.*/

function masgrande(n1, n2) {
    if (n1 > n2) {
        return true;
    } else {
        return false;
    }
}
let numero1 = prompt("pon un numero:");
let numero2 = prompt("pon un numero:");
let numero = masgrande(numero1, numero2);
if (numero) {
    console.log("el primer numero es mas grande");
} else {
    console.log("el segundo numero es mas grande");
}

