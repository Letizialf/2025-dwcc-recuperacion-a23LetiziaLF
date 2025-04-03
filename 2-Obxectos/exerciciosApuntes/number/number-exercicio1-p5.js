"use strict";
// 1. ¿Como calcularías o número de cifras dun número enteiro positivo utilizando propiedades e métodos dos obxectos vistos ata agora?

function calcularNumeroCifras(numero) {
  let numString = String(Math.abs(numero)); //Pasamos o número en valor absoluto a String
  let numSinDecimales = numString.replace(".", ""); // Eliminamos o separador dos decimales
  let numeroCifras = numSinDecimales.length; // Contamos o largo do String === Cifras do numero
  return numeroCifras;
}

let numeroDeProba = -1234513.894;
console.log(calcularNumeroCifras(numeroDeProba));
