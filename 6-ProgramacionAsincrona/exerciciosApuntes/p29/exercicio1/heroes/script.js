// function reqListener() {
//   console.log(this.response);
//   console.log(`Estado: ${this.status}`);
// }
const promesa = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
promesa
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    crearPaxina(data);
  });
function crearPaxina(data) {
  let squad = data.squadName;
  crearElementos("header", "h1", squad);
  datosHeader(data);
  datosHeroe(data);
}

/// Funcion para crear elementos (elemento pai, elemento a crear, textContent)
///
function crearElementos(pai, elemento, contido) {
  let partePai = document.querySelector(pai);
  let elementoCrear = document.createElement(elemento);
  elementoCrear.textContent = contido;

  partePai.append(elementoCrear);
}

/// Función para obter os datos do header
//// Devolve un String hometown + formed
function datosHeader(data) {
  let homeTown = data.homeTown;
  let formed = data.formed;
  let contenido = `HomeTown: ${homeTown} // Formed: ${formed}`;
  crearElementos("header", "p", contenido);
}

/// Función para obter os datos do heroe
////
function datosHeroe(data) {
  let heroes = data.members;
  heroes.forEach((heroe) => {
    let article = document.createElement("article");
    let section = document.querySelector("section");
    section.append(article);
    crearElementos("article:last-child", "h2", heroe.name);
    crearElementos(
      "article:last-child",
      "p",
      `Secret Identity: ${heroe.secretIdentity}`
    );
    crearElementos("article:last-child", "p", `Age: ${heroe.age}`);
    crearElementos("article:last-child", "p", `SuperPowers: `);
    let poderes = heroe.powers;
    let lista = document.createElement("ul");
    article.append(lista);
    poderes.forEach((poder) => {
      crearElementos("article:last-child ul", "li", poder);
    });
  });
}
