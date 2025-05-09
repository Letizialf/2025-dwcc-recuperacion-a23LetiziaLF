"use strict";
// <span class="tag">Choice 1</span>
// <span class="tag">Choice 2</span>
// <span class="tag">Choice 3</span>

/**
 * Cando o usuario e,peza a escribir as eleccións na área de texto estas aparecen como pequenas tags debaixo
 */

let tagsDiv = document.getElementById("tags");
let textarea = document.getElementById("textarea");
textarea.focus();

textarea.addEventListener("keyup", escribirTags);

/**
 * Esta función executa a creación das tags e, ademais, ten un timeout de 10s logo de que se pulsa enter execute a función que selecciona a opción random
 * @param {event} event
 */
function escribirTags(event) {
  createTags(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);

    randomSelect();
  }
}

/**
 * Esta función recibe o input do textarea e crea as tags con cada unha das opcións separadas por comas ','
 * Unha vez separa todo e valida que non hai tags vacías, crea un elemento 'span' con cada un dos valores
 * @param {texto} texto
 */
function createTags(texto) {
  let tags = texto
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsDiv.innerHTML = "";

  tags.forEach((tag) => {
    let choice = document.createElement("span");
    choice.innerText = tag;
    choice.classList.add("tag");
    tagsDiv.appendChild(choice);
  });
}

// Cando se faga click en 'enter' deben de resaltarse as tags (ao azar e unha detrás de outra, non á vez) durante 10 segundos antes de quedar finalmente o highlight na opción final (random Choice)

// COPIADO DA SOLUCIÓN, PREGUNTAR
function randomSelect() {
  const roulette = 20;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // stop it and pick a random tag to land on and highlight

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, roulette * 100);
}

// Select Random Tag

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
