"use strict";

// Dado o array 'froitas', fai os sequintes apartados co método splice:

let frutas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
console.log(`Array inicial: ${frutas.join(", ")}`);

//a. Elimina as mazás.
frutas.splice(1, 1);
console.log("Eliminamos as mazás: -------------------------");
console.log(frutas.join(", "));

// b. Engade laranxas e sandía detrás dos plátanos
frutas.splice(3, 0, "laranxas", "sandía"); // Engade na posición 3, os elementos especificados (poñemos 0 pq non queremos eliminar nada)
console.log(
  "Engadimos laranxas e sandías logo dos plátanos: ------------------------"
);
console.log(frutas.join(", "));

// c. Quita os kiwis e pon mo seu lugar cereixas e nésperas
frutas.splice(1, 1, "cereixas", "nésperas");
console.log(
  "Eliminamos os kiwis e engadimos na súa posición cereixas e nésperas: -----------------------"
);
console.log(frutas.join(", "));
