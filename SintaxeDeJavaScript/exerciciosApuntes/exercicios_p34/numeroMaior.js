"use strict";
// 2. Crea 3 variables e inicialízaas con 3 números diferentes.
// Mostra por pantalla o maior dos 3 números

let num1 = 1,
  num2 = 6,
  num3 = 78;

if (num1 > num2 && num1 > num3) {
  console.log(`O número maior é ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`O número maior é ${num2}`);
} else {
  console.log(`O número maior é ${num3}`);
}
