"use strict";

// EXERCICIO 1------------------------------------------------------
console.log("Exercicio 1:");

let cubo = (num) => {
  return Math.pow(num, 3);
};

console.log(cubo(3));

// EXERCICIO 2 -----------------------------------------------------
console.log("Exercicio 2:");

let elementosImpares = (array) => {
  let arrayImpares = [];
  array.forEach((element) => {
    if (element % 2 != 0) {
      arrayImpares.push(element);
    }
  });
  return arrayImpares;
};

const array = [1, 4, 5, 7];
console.log(elementosImpares(array));

// EXERCICIO 3 -----------------------------------------------------
console.log("Exercicio 3: usando rest");

let sumatorio = (...argumentos) => {
  let total = 0;
  for (const argumento of argumentos) {
    total += argumento;
  }
  return total;
};
console.log(sumatorio(2, 4, 5));

// EXERCICIO 4 -----------------------------------------------------
console.log("Exercicio 4: ");

let media = (...argumentos) => {
  let media = 0;
  for (const argumento of argumentos) {
  }
};
