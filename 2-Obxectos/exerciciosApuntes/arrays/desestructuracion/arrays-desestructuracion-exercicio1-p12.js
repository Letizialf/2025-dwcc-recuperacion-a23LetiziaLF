"use strict";

// Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:

const players = [
  [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
  ],
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
];

// Proporciona UNHA ÚNICA SENTENCIA para cada unha das seguintes instruccións

// a. Crea as variables players1 e players2 que conteñan un array cos xogadores de cada equipo
let [players1, players2] = [...players];
console.log(`Equipo 1: ${players1}`);
console.log(`Equipo 2: ${players2}`);

// b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
// Crea unha variable gk para o porteiro e unha variable de tipo array chamada fieldPlayers para o resto do equipo
let [gk, ...fieldPlayers] = players1;
console.log(`Portero del equipo 1: ${gk}`);
console.log(`Equipo 1:\n-PORTERO: ${gk}\n-JUGADORES DE CAMPO: ${fieldPlayers}`);

// c. Crea un array allPlayers que conteña os xogadores dos dous equipos
let allPlayers = players1 + players2;
console.log(`Todos los jugadores: ${allPlayers}`);

// d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho' e 'Perisic.
// Crea unha nova variable de tipo array chamada players1Final que conteña TODOS os xogadores, os iniciais e os tres novos.
players1.push("Thiago", "Coutinho", "Perisic");
let [gkFinal, ...players1Final] = players1;
console.log(
  `Plantilla final del equipo 1:\n-PORTERO: ${gkFinal}\n-JUGADORES DE CAMPO: ${players1Final}`
);
