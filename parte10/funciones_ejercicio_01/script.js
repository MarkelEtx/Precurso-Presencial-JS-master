

/*Escribe una función que escriba “Hola” tantas veces
    como el número que le pasamos de parámetro.
    Llámala dos veces, primero con 5 y después con 3. */

function hola(numero) {
    for (let i = 0; i < numero; i++) {
        document.querySelector("body").innerHTML += `<h1 id="title">Título</h1>`;

    }
    document.querySelector("body").innerHTML += `--------------seperación---------------------`;

}
hola(5);
hola(3);