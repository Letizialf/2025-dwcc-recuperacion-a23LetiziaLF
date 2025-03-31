"use strict";

// 5. Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1).

let numero = 5;
let factorial = 1;

for (let i = numero; i >= 1; i--) {
  factorial *= i;
}
console.log(factorial);
