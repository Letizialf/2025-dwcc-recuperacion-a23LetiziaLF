// REQUEST
function reqListener() {
  console.log(this.response);
  console.log(`Estado: ${this.status}`);
}

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", crearPagina);

xhr.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
xhr.responseType = "json";
xhr.send();

/**
 * Funcion para crear elementos (elemento pai, elemento a crear, textContent)
 */
function crearElementos(pai, elemento, contido) {
  let partePai = document.querySelector(pai);
  let elementoCrear = document.createElement(elemento);
  elementoCrear.textContent = contido;

  partePai.append(elementoCrear);
}

/**
 * Función global que se chamará no eventListener
 */
function crearPagina() {
  const data = this.response;
  console.log(data);

  crearHeader(data);

  crearSection(data);
}

/**
 * HEADER
 */

function crearHeader(data) {
  // DATOS
  let squadName = data.squadName;
  let homeTown = data.homeTown;
  let formed = data.formed;

  let contenido = `HomeTown: ${homeTown} // Formed: ${formed}`;
  // ELEMENTOS
  crearElementos("header", "h1", squadName);
  crearElementos("header", "p", contenido);
}

/**
 * SECTION COS DATOS DOS HEROES
 */

function crearSection(data) {
  let miembros = data.members;
  console.log(miembros);

  miembros.forEach((hero) => {
    // Creamos os articles de cada heroe
    let article = document.createElement("article");
    let section = document.querySelector("section");
    section.append(article);

    // obtemos os datos e metémolos no seu respectivo elemento
    crearElementos("article:last-child", "h2", hero.name);

    crearElementos("article:last-child", "p", hero.secretIdentity);

    crearElementos("article:last-child", "p", hero.age);

    crearElementos("article:last-child", "p", "Superpowers:");

    let powers = hero.powers;
    let listaPoderes = document.createElement("ul");
    article.append(listaPoderes);

    powers.forEach((poder) => {
      crearElementos("article:last-child ul", "li", poder);
    });
  });
}
