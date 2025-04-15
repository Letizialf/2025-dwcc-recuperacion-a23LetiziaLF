"use strict";

// Crea unha función que reciba un elemento e un array como parámetros.
// A función debe devolver un novo array que conteña os índices onde aparece ese elemento no array

const numeros = [1, 2, 4, 2, 5, 10, 3, 8, 2];

function indexes(elemento, arrayElementos) {
  let arrayIndexes = [];
  arrayElementos.forEach((element, index) => {
    if (element === elemento) {
      arrayIndexes.push(index);
    }
  });
  return arrayIndexes;
}

console.log(indexes(2, numeros));
