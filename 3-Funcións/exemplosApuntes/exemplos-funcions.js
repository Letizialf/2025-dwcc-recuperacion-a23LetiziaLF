"use strict";

// As funcións son anacos de código deseñado para realizar unha tarefa, unha das vantaxes é que, si está ben descrita, pode ser reutilizada sen necesidade de volver a escribir o mesmo código unha e outra vez.
// Á súa vez, tamén son moi boas para axudar a estructurar o código e mellorar a comprensión do mesmo

// IMPORTANTE: Se unha función ten que devolver algo hai que poñer a sentencia return (logo desta sentencia non se executará nada máis da función)

// É importante diferenciar a definición da función da chamada á función.
// Cando se define unha función, esta non se executa. Na definición, unicamente se lle asigna un nome e especifícase que facer cando se chama á función.
// Para que a función se execute haberá que invocala ou chamala usando o operador (), ademais de pasarlle os parámetros necesarios.
// No seguinte exemplo, toCelsius refírese ao obxecto función, mentres que toCelsius() refírese ao resultado da función:

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius); //Devolve a función 'escrita'
console.log(toCelsius(68)); // Devolve o valor que ten o return

// ----------------------- PARÁMETROS ------------------------------
// Os parámetros de unha función pásanse por valor, polo que se dentro da función cambiamos ese valor, non afecta ao resto do código.
// Sin embargo, se pasamos un obxecto como parámetro, apunta á súa dirección de memoria, polo que se cambiamos cousas dentro da función de dito obxecto SI que se verá afectado o resto do código que funcione con ese obxecto.

// Tamén se poden establecer parámetros con valores por defecto
function sumar(operando1, operando2 = 2) {
  return operando1 + operando2;
}
console.log(sumar(5, 4)); // Como se especifica un segundo parámetro o resultado calcúlase cos datos pasados
console.log(sumar(2)); //Dará 4 porque ao non especificarse un segundo parámetro colle o por defecto

// REST ------------------------------------------------------------
// A sintaxe dos parámetros rest permite que unha función acepte un número indeterminado de argumentos nun array
// Solo o último parámetro pode ser o rest e vai precedido de '...'
// Os arrays rest son arrays reais, polo que se lle poden aplicar métodos de arrays
console.log("REST................................................");

function myFun(a, b, ...manyMoreArgs) {
  console.log(`a = ${a}`); // a = one
  console.log(`b = ${b}`); // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]
  console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg; //Suma todos os argumentos
  }
  return total;
}
console.log(sum(1, 2, 3)); // expected output: 6
console.log(sum(1, 2, 3, 4)); // expected output: 10

// SPREAD ----------------------------------------------------------
// Ao contrario que rest (que recolle os múltiples argumentos e condensaos nun único array), spread expande o array nos seus elementos.
// A sintaxe spread só pode utilizarse nos argumentos dunha función ou na construcción dun array

console.log("SPREAD .............................................");

// exemplo 1
const array = [7, 8, 9];
const newArray = [1, 2, ...array];
// equivalente a const newArray = [1, 2, array[0], array[1], array[2]];
console.log(newArray);

// exemplo 2
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //Interpretao como se se lle pasaran os elementos por separado en lugar de en un único array

// exemplo 3
function myFunction(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
