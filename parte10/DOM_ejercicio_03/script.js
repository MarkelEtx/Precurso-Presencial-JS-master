let imagen = document.getElementById("foto");
let b = true;


imagen.addEventListener("click", vuelta);
function vuelta() {
    if (b) {
        imagen.src = "./anverso.jpg";
    } else {
        imagen.src = "./reverso.png";
    }
    b = !b;

}
