let text = document.getElementById("texto");
let bool = "false";
text.innerHTML = "la variable es " + bool;

let boton = document.getElementById("btn");
boton.addEventListener("click", puttrue);

function puttrue() {
    bool = "true";
    text.innerHTML = "la variable es " + bool;
}