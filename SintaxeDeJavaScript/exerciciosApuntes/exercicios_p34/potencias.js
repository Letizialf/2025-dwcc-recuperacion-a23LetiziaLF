"use strict";

// 4. Escribe as potencias de 2, dende 2⁰ ata 2^20. Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1”
let contador = 0;

for (let exponente = 0; exponente <= 20; exponente++) {
  let resultadoPotencia = Math.pow(2, exponente);
  console.log(`2 elevado a ${contador} = ${resultadoPotencia}`);
  contador = contador + 1;
}
