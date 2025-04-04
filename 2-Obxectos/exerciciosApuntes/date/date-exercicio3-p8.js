"use strict";

// Función á que se lle pase unha data e devolva true se é fin de semana

function isWeekEnd(date) {
  if (date.getDay() === 0 || date.getDay() === 6) return true;
  else return false;
}

let data = new Date("2005-04-03"); //Domingo - true
console.log(isWeekEnd(data));
