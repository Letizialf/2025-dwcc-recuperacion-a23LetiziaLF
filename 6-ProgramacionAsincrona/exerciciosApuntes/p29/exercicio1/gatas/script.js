const urlGatas =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";
let promise = fetch(urlGatas);

// Consumimos a promesa
promise
  .then((response) => {
    // console.log(response.ok);
    // console.log(response.status);
    const data = response.json();
    return data;
  })
  .then((data) => {
    crearPaxina(data);
  });

function crearPaxina(data) {
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

function obterNomesGatas(data) {
  let nomeGata = data.map((gata) => gata.name);

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
