"use strict";

// 3. Crea unha función que dado o radio dun círculo, devolva a súa área.
// E fai outra función que reciba o radio e devolva o perímetro do círculo.
// Mostra por consola o resultado das funcións usando dúas cifras decimais.

function circleArea(circleRadius) {
  let area = (Math.PI * Math.pow(circleRadius, 2)).toFixed(2);
  return `El área del círculo cuyo radio = ${circleRadius} es: A=${area}`;
}

function circlePerimeter(circleRadius) {
  let perimetro = (Math.PI * (circleRadius * 2)).toFixed(2);
  return `El perímetro del círculo cuyo radio = ${circleRadius} es: P=${perimetro}`;
}

console.log(circleArea(7));
console.log(circlePerimeter(7));
