"use strict";
// Poñer o primeiro caracter en maiúscula
let cadea = "desenvolvemento web";

function cambiarMinuscula(cadea) {
  let cadeaNova = cadea.at(0).toUpperCase() + cadea.slice(1);
  console.log(cadeaNova);
}

cambiarMinuscula(cadea);
