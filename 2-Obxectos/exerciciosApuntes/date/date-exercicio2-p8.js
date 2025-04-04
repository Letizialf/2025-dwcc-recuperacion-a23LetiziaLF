"use strict";

// Función á que se lle pase un mes e un ano e devolva o número de días de dito mes

function howManyDays(monthCode, year) {
  // Creamos un obxecto date cos datos recibidos e poñemos o número de días a 0 para que non o inicialice JS a 1, desta maneira o 0 sustitirase polo número correcto de días (situarase no úlimo)
  let date = new Date(year, monthCode, 0);
  return console.log(date.getDate());
}

howManyDays(2, 2005);
