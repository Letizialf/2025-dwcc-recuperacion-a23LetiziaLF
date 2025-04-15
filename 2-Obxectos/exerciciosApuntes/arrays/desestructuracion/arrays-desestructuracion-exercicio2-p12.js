"use strict";

// Dado un array con nomes de variables formados por dúas palabras separadas por '_', fai as operacións necesarias para mostrar por consola os nomes das variables en formato camelCase.
const arrayVariables = ["first_name", "last_NAME"];

function pasarACamelCase(array) {
  for (const variable of array) {
    let [first, second] = variable.toLowerCase().split("_");
    let variableFinal = first + second.at(0).toUpperCase() + second.slice(1);
    console.log(variableFinal);
  }
}

pasarACamelCase(arrayVariables);
