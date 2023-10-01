let n1 = prompt("numero:");

document.getElementById("num").innerHTML = n1;

button = document.querySelector("#btn");

button.addEventListener("click", function () {
    sumarnumero(n1);
});

function sumarnumero(numero) {
    document.getElementById("num").innerHTML = parseInt(document.getElementById("num").innerHTML) + parseInt(numero);
}