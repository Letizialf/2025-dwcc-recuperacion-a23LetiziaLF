"use strict";
// Crea unha función denominada reverseString que reciba unha cadea como parámetro e devolva a cadea cos caracteres invertidos. Así, se recibe "hello", debe devolver "olleh". A funcionalidade debe estar implementada manualmente.

let stringAProbar = "Buenos días mundo cruel";

function reverseStringManual(cadea) {
  let cadeaFinal = "";
  for (let i = cadea.length; i >= 0; i--) {
    cadeaFinal += cadea.charAt(i);
  }
  return cadeaFinal;
}
console.log(reverseStringManual(stringAProbar));
