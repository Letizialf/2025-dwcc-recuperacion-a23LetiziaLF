"use strict";

// Crea unha función que reciba unha data como parametro e devolva o número de días que pasaron dende que comezou o ano

function diasPasaron(data) {
  let primerDiaAno = new Date(data.getFullYear(), 0, 1); // Collemos o primeiro dia do ano (1 de enero(0) de 2025)
  let diferencia = data - primerDiaAno; // Esta línea calcula a diferencia en milisegundos entre a fecha 'data' e o primer día do ano.
  return Math.floor(diferencia / (1000 * 60 * 60 * 24)); //Aquí se convierte la diferencia de milisegundos a días:   1000 ms = 1 segundo; 60 s = 1 minuto; 60 min = 1 hora; 24 h = 1 día
}

console.log(diasPasaron(new Date(2025, 4, 15)));
