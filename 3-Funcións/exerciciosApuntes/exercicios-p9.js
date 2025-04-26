"use strict";

// EXERCICIO 1------------------------------------------------------
console.log("Exercicio 1: Potencias");

let cubo = (num) => {
  return Math.pow(num, 3);
};

console.log(cubo(3));

// EXERCICIO 2 -----------------------------------------------------
console.log("Exercicio 2: Impares");

let elementosImpares = (array) => {
  let arrayImpares = [];
  array.forEach((element) => {
    if (element % 2 != 0) {
      arrayImpares.push(element);
    }
  });
  return arrayImpares;
};

const array = [1, 4, 5, 7];
console.log(elementosImpares(array));

// EXERCICIO 3 -----------------------------------------------------
console.log("Exercicio 3: sumatorio usando rest");

const sumatorio = (...argumentos) => {
  let total = 0;
  for (const argumento of argumentos) {
    total += argumento;
  }
  return total;
};
console.log(sumatorio(2, 4, 5));

// EXERCICIO 4 -----------------------------------------------------
console.log("Exercicio 4: medias usando rest");

const media = (...argumentos) => {
  let sumatorio = 0;
  let total = 0;
  for (const argumento of argumentos) {
    sumatorio += argumento;
  }
  total = sumatorio / argumentos.length;
  return total;
};

console.log(media(1, 2, 3, 4, 5));

// EXERCICIO 5 ------------------------------------------------------
console.log("Exercicio 5: mínimo e máximo");

const minMax = (array) => ({
  min: Math.min(...array), //Recolle o valor máis pequeno do array
  max: Math.max(...array), // Recolle o valor máis grande do array
});

// let arrayProba = [2, 5, 9, 10];
console.log(minMax([2, 5, 9, 10]));
console.log(minMax([1, 3, 39, 24]));

// EXERCICIO 6 ------------------------------------------------------
console.log("Exercicio 6: área dun rectángulo");

const areaRectangulo = ((largo, ancho) => {
  largo = 9;
  ancho = 2;
  let area = largo * ancho;
  return console.log(`El área del rectángulo especificado es: ${area}`);
})();

// EXERCICIO 7 -------------------------------------------------------
console.log("Exercicio 7: DNI");

function comprobarDni(cadena) {
  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  // Verificar formato básico (8 díxitos seguidos dunha letra)
  const regex = /^[0-9]{8}[A-Z]$/i;
  if (!regex.test(dni)) {
    return false;
  }

  let numero = parseInt(cadena.slice(0, 8), 10);
  let letra = cadena[8].toUpperCase();

  let letraCorrecta = letras[numero % 23];
  return letra === letraCorrecta;
}

console.log(`El DNI (98786547T) es: ${comprobarDni("98786547T")}`);
console.log(`El DNI (35491833G) es: ${comprobarDni("35491833G")}`);
console.log(`O DNI introducido é ${validarDNI("49402231W")}`);
// EXERCICIO 8 ------------------------------------------------------------
