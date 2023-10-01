let imagen = document.getElementById("foto");
let b = true;


imagen.addEventListener("click", vuelta);
function vuelta() {
    if (b) {
        imagen.src = "./reverso.png";
    } else {
        imagen.src = "./anverso.jpg";
    }
    b = !b;

}
