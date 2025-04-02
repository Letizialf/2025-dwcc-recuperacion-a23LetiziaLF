"use strict";
// Crea unha función á que se lle pase unha cadea de números e devolva a cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada

function enmascararNumero(number) {
  let numeroEnmascarado = number.padStart(3, "*");
  console.log(numeroEnmascarado);
}

enmascararNumero("453652434");
