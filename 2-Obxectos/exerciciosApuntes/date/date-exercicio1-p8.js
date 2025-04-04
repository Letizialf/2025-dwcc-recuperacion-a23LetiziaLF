"use strict";

// 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual.
let weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

let dataEspecificada = new Date("2025-06-25");
console.log(weekDays[dataEspecificada.getDay()]);
// console.log(dataEspecificada.getDay());
