"use strict";
// 1. Crea unha variable que almacene un día da semana de luns a domingo.
// En función do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.

let dia = "Domingo";

if (dia == "Domingo" || dia == "Sabado") {
  console.log(`Día da semana introducido: ${dia}`);
  console.log(`O ${dia} non é un día laboral`);
} else {
  console.log(`Día da semana introducido: ${dia}`);
  console.log(`O ${dia} sí é un día laboral`);
}
