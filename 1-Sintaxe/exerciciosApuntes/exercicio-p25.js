"use strict";
console.log("EXERCICIO DE OPERADORES 1---------------------------");

console.log("2" == 2); //True, mismo valor

let a = 4,
  b = 5,
  c = "5";
console.log("a = " + a + ", b = " + b + ", c = " + c);
console.log("'b == c' -> " + (b == c)); // True
console.log("'b === c' -> " + (b === c)); //False, este operador compara también el tipo del dato y no son iguales
console.log("'b != c' -> " + (b != c)); // False, el valor es el mismo
console.log("'b !== c' -> " + (b !== c)); // True, no son del mismo tipo
console.log("'a == b' -> " + (a == b)); // False, no son iguales
console.log("'a != b' -> " + (a != b)); // True, son números diferentes
