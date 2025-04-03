"use strict";

// 2. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos

function pasarMinutosHoras(minutos) {
  let horas = Math.floor(minutos / 60);
  let minutosRestantes = minutos % 60;
  console.log(`${minutos} minutos son: ${horas}h e ${minutosRestantes}min`);
}

pasarMinutosHoras(6125);
