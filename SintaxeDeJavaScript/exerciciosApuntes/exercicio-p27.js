"use strict";
console.log("EXERCICIO DE OPERADORES 2---------------------------");

console.log("'false && false' -> " + (false && false)); // false, devolve o valor do primeiro operando avaliado como falso
console.log("'false && true' -> " + (false && true)); // false, polo mismo que o anterior
console.log("'true && false' -> " + (true && false)); // false, sigue devolvendo false porque un dos operadores se avalía como falso
console.log("'true && true' -> " + (true && true)); // true, se todos os operandos son verdadeiros, devolve true
console.log("'false || false' -> " + (false || false)); // false, devolve falso porque ningún dos operandos se pode avaliar como true e devolve o valor do último
console.log("'false || true' -> " + (false || true)); // true, un dos operandos é true polo que devolve ese valor
console.log("'true || false' -> " + (true || false)); // true, o primeiro valor pode avaliarse como true, polo que devolve ese valor
console.log("'true || true' -> " + (true || true)); // true, ambos operandos son true polo que devolve o valor do último avaliado
console.log("'!false' -> " + !false); // true, todo o que non é false é true
