// Utilizando XMLHttpRequest, descarga o ficheiro JSON con información sobre gatas e a súa descendencia e crea unha páxina web onde se mostre a información recibida.
// Debes mostrar o nome das gatas separados por comas. Antes do último nome debe ir a conxunción “e” e ao final un punto.
// O texto debe quedar así: “Os nomes das gatas son Lindy, Mina e Antonia.”.
// Ademais, debes mostrar información do número de gatiños, indicando cantos deles son femias e cantos machos:
// “Hai 8 gatiños: 5 femias e 3 macho

// Esta función amosará información útil da resposta dada á request
function reqListener() {
  console.log(this.response);
  // console.log(`Estado: ${this.status}`);
}

// Creamos a instancia do obxecto:
const xhr = new XMLHttpRequest();

// Engadimos o listener de eventos para que se execute a función anterior cando se cargue a request
xhr.addEventListener("load", obterData); //Aquí é onde temos que chamar á función global que contén ao resto para que funcione

// Inicializamos o obxecto co método GET e a url do ficheiro local michis.json
xhr.open("GET", "michis.json");

// Establecemos o formato no que queremos que se recolla a información
xhr.responseType = "json";

// Enviamos a petición
xhr.send();

/**
 * Creamos unha función para englobar ás demais e poder chamala no eventListener que fai a request
 */
function obterData() {
  const data = this.response;

  //NOMES GATAS
  let nomesGatas = obterNomesGatas(data);
  let nomesGatasElement = document.createElement("p");
  nomesGatasElement.innerText = `Os nomes das gatas son: ${nomesGatas}`;
  document.body.append(nomesGatasElement);

  // CANTIDADE MICHIS
  let { femias, machos } = cantidadeDeMichis(data);
  let michisElement = document.createElement("p");
  michisElement.innerText = `Hai ${
    femias + machos
  } michis: ${femias} femias e ${machos} machos`;
  document.body.append(michisElement);
}

/**
 * Función para obter o nome das gatas
 */
function obterNomesGatas(data) {
  let nomeGata = data.map((gata) => gata.name);
  console.log(nomeGata);
  //Esto devolve un array cos nomes das gatas únicamente, para poder formatear os nomes e que aparezan como texto hai que facer o seguinte:
  return (
    nomeGata.slice(0, -1).join(", ") +
    " e " +
    nomeGata[nomeGata.length - 1] +
    "."
  );
}

/**
 * Función para obter a información dos michis, cantidade total e cantidade de femias e machos
 */
function cantidadeDeMichis(data) {
  let femias = 0;
  let machos = 0;

  data.forEach((gata) => {
    gata.kittens.forEach((michi) => {
      if (michi.gender == "m") {
        machos++;
      } else if (michi.gender == "f") {
        femias++;
      }
    });
  });
  return { femias, machos };
}
