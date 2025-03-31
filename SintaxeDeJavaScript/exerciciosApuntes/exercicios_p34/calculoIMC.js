"use strict";
// 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)] 2
// a. Almacena en variables o peso e altura de dúas persoas.
// b. Calcula o IMC das dúas persoas.
// c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'

let peso1 = 56;
let altura1 = 1.65;
let indice1 = peso1 / Math.pow(altura1, 2);
console.log(indice1);

let peso2 = 79;
let altura2 = 1.89;
let indice2 = peso2 / Math.pow(altura2, 2);
console.log(indice2);

if (indice1 > indice2) {
  console.log(
    `O IMC (${indice1.toFixed(
      1
    )}) da primeira persoa é maior que o da segunda persoa (${indice2.toFixed(
      1
    )})`
  );
} else if (indice1 == indice2) {
  console.log(`Ambas persoas teñen o mesmo IMC`);
} else {
  console.log(
    `A segunda persoa (${indice2.toFixed(
      1
    )}) ten maior IMC que a primeira persoa (${indice1.toFixed(1)})`
  );
}
