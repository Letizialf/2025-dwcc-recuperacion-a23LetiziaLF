"use strict";
// Crea unha función á que se lle pase unha cadea de números e devolva a cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada

function enmascararNumero(cadena) {
  let numeroEnmascarado = cadena.slice(-4).padStart(cadena.length, "*");
  console.log(numeroEnmascarado);
}

enmascararNumero("45365243498396267");
