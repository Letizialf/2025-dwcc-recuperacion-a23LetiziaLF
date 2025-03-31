"use strict";
// 1. Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto.
// A función debe calcular o prezo final aplicado o desconto e devolver este valor
let prezo = 50;
let porcentaxeDesconto = 21;

function calcularDescontos(prezo, porcentaxe) {
  let desconto = (prezo * porcentaxe) / 100;
  let prezoFinal = prezo - desconto;
  return prezoFinal;
}

console.log(
  `O prezo final logo de aplicarlle un desconto do ${porcentaxeDesconto}% a ${prezo} é: ${calcularDescontos(
    prezo,
    porcentaxeDesconto
  )}`
);
