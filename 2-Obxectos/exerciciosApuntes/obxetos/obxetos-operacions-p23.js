"use strict";

//1. Crea un obxecto chamado 'television' coas propiedades marca, categoria (televisores), unidades (4), prezo (354.99) e un método chamado 'importe' que devolva o prezo total das unidades (unidade x prezo)

const television = {
  marca: "LG",
  categoria: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe: function () {
    let total = this.prezo * this.unidades;
    return console.log(total);
  },
};

television.importe();

// 2. Imaxinar que se recolle a seguinte información relativa a un xogo nun servidor

const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Utilizando a desestructuración de obxectos crea as seguintes variables:
//  a. team1: valor da propiedade team1
//  b. draw: valor da propiedade x
//  c. team2: valor da propiedade team2

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(
  `As probabilidades son as seguintes:\nTeam 1: ${team1}\nEmpate: ${draw}\nTeam2 ${team2}`
);

// 3. Dado o seguinte obxecto:
const futGame = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};

// a. Recorre o array futGame.scored e mostra por pantalla a información do xogador que marcou e o número de gol marcado: Gol 1: Lewandowski

const { scored } = futGame;

scored.forEach((player, index) => {
  console.log(`Gol ${index + 1}: ${player}`);
});

// b. Crea un novo obxecto chamado scorers que conteña como propiedades o nome dos xogadores que marcaron gol e como valor o número de goles: {Lewandowski: 2}

const scorers = {};

for (const player of scored) {
  if (Object.hasOwn(scorers, player)) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}

console.log(scorers);
