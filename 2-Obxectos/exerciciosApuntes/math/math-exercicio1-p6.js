"use strict";

// 1. Números aleatorios:
// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
let numeroEntre0e3 = Math.floor(Math.random() * 4);
console.log(numeroEntre0e3);

// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
let numeroEntre1e3 = Math.ceil(Math.random() * 3);
console.log(numeroEntre1e3);

// c. Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución debe mostrar un número aleatorio entre 5 e 10 (incluídos):
// console.log(numeroAleatorio(5, 10));

function numeroAleatorio(min, max) {
  let minCeiled = Math.ceil(min);
  let maxFloored = Math.floor(max);

  let numeroRandom = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  );
  console.log(numeroRandom);
}

numeroAleatorio(5, 10);
