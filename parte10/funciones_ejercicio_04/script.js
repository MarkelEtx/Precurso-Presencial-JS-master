/* Crea un aplicación que nos convierta una cantidad de euros 
      introducida por teclado a otra moneda, estas pueden ser a dólares, yenes o libras. 
      El método tendrá como parámetros, la cantidad de euros 
      y la moneda a pasar que será un string. Este no devolverá ningún valor, 
      mostrará un mensaje indicando el cambio.
      
            a. 0.86 libras es un 1 €
            b. 1.28611 $ es un 1 €
            c. 129.852 yenes es un 1 €  */

let mon1 = prompt("introduce cantidad");
let mon2 = prompt("introduce dolares, yenes o libras");
cambio(mon1, mon2)
function cambio(cant, mon) {
    switch (mon) {
        case "dolares":
            alert(cant + "€ son " + (cant * 1.28611) + " dolares");
            break;
        case "yenes":
            alert(cant + "€ son " + (cant * 129.852) + " yenes");
            break;
        case "libras":
            alert(cant + "€ son " + (cant * 0.86) + " libras");
            break;
        default:
            break;
    }
}
