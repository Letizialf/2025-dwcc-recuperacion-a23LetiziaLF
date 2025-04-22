"use strict";

// Crea unha función denominada dividirArray que reciba como parámetros un array e un número que indica o tamaño dos anacos en que se dividirá o array. A función devolverá un novo array que conteña como elementos novos arrays do tamaño máximo indicado no segundo parámetro.

// dividirArray([1, 2, 3, 4], 2) devolverá [[1, 2],[3, 4],]
// dividirArray([1, 2, 3, 4], 3) devolverá [[1, 2, 3], [4]]

function dividirArray(array, numero) {
  let novoArray = [];
  for (let i = 0; i < array.length; i += numero) {
    const porcion = array.slice(i, i + numero);
    novoArray.push(porcion);
  }
  return novoArray;
}

console.log(dividirArray([1, 2, 3, 4], 2).join(" - "));
console.log(dividirArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4).join(" - "));
