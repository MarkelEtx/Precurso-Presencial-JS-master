//Cogemos el elemento por su Id
let title = document.getElementById("title");

//Cogemos todos los elementos que tienen el mismo class
let paragraphs = document.getElementsByClassName("paragraph");

//Cogemos todos los elementos que son del mismo tipo
let ps = document.getElementsByTagName("p");

//Cogemos el elemento por su id
let titleQS = document.querySelector("#title");

//Cogemos el primer elemento que coincida con el class
let firstParagraph = document.querySelector(".paragraph");

//Cogemos el primer elemento que coincida con el tipo
let firstP = document.querySelector("p");

//Cogemos todos los elementos que tienen el mismo class
let allParagraphQS = document.querySelectorAll(".paragraph");

//Cogemos todos los elementos que son del mismo tipo
let allPsQS = document.querySelectorAll("p");

console.log("title", title);
console.log("paragraphs", paragraphs);
console.log("ps", ps);
console.log("titleQS", titleQS);
console.log("firstParagraph", firstParagraph);
console.log("firstP", firstP);
console.log("allParagraphQS", allParagraphQS);
console.log("allPsQS", allPsQS);
