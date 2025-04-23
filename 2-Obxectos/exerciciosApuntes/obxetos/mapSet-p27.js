"use strict";
//  O sequinte mapa almacena información dos eventos ocorridos durante un partido indicando o minuto no que se produciron

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [45, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// a. Crea un novo array chamado eventos que almacene os diferentes eventos ocorridos (sen o minuto e os duplicados)
let arrayEventos = [];
for (const element of gameEvents) {
  arrayEventos.push(element[1]);
}

console.log(arrayEventos);

// Para que non teña duplicados podemos pasalo a Set, e xa collerá automáticamente os valores únicos
let setEventos = [...new Set(arrayEventos)];
console.log(setEventos);

// b. Recorre con un bucle o mapa e mostra información de cada evento, indicando se ocorreu na primeira parte ou na segunda

for (const element of gameEvents) {
  if (element[0] <= 45) {
    console.log(`[PRIMEIRA PARTE] ${element[0]}: ${element[1]}`);
  } else {
    console.log(`[SEGUNDA PARTE] ${element[0]}: ${element[1]}`);
  }
}
