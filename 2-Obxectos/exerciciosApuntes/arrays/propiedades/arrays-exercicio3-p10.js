"use strict";

// Crea unha función á que se lle pase unha frase e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas

function camelCasing(frase) {
  let newFrase = "";
  let fraseArray = frase.split(" ");
  for (const element of fraseArray) {
    let palabra = element.at(0).toUpperCase() + element.slice(1).toLowerCase();
    newFrase += palabra + " ";
  }
  return console.log(newFrase);
}

camelCasing("Hola munDo cruel");
