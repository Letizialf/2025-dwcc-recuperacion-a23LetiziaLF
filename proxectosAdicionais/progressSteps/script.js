"use strict";

// Collemos os elementos que imos utilizar
let prev = document.getElementById("prev"); // Botón para acceder ao paso previo
let next = document.getElementById("next"); // Botón para acceder ao paso seguinte
let progreso = document.getElementById("progress"); // Barra de progreso
let circles = document.querySelectorAll(".circle"); // Seleccionamos os círculos xa que cando esteamos no paso que lles corresponde teremos que engadirlle a clase active

let currentActive = 1;

next.addEventListener("click", nextStep);
prev.addEventListener("click", previousStep);

function nextStep() {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  progressUpdate();
}

function previousStep() {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  progressUpdate();
}
/**
 * Función que actualiza as clases active dos elementos, é dicir, activa ou desactiva os círculos en función de en que paso estemos ubicados
 */
function progressUpdate() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      //Se o índice é menor que o activo hai que activalo
      circle.classList.add("active");
    } else {
      // Se o ínice do círculo é maior que o activo non se pode activar dito elemento
      circle.classList.remove("active");
    }
  });

  // Manexamos a barra de progreso collendo os elementos que estan activos e calculando o ancho da barra en función a ditos elementos
  let activos = document.querySelectorAll(".active");
  progreso.style.width =
    ((activos.length - 1) / (circles.length - 1)) * 100 + "%";

  // Hai que ativar o botón para acceder aos pasos previos pero só se hai algún paso antes, polo que se activará se o paso actual (currentActive) é maior que 1.
  // Da misma forma, o botón para avanzar ao seguinte paso queará desactivado cando non exista ningún paso posterior ao actual

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
