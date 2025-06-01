// Constitúen unha forma alternativa para consumir promesas en lugar de usar .then()

// A palabra clave 'async' diante dunha función determina que esa función será asíncrona

// As expresións 'await' fan que o código se execute como síncrono, suspendendo a súa execución ata que a promesa se resolva ou se rexeite

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ titulo: "Titulo 1" });
  }, 1000);
});

async function getPromise() {
  // Antes consumiríamos a promesa así:
  //   promise.then((response) => {
  //     console.log(response);
  //   });

  // Agora poderíamos facer o seguinte:
  let result = await promise; //Espera a que a promesa se resolva para asignar este valor
  console.log(result);
}

console.log(`O código non se bloquea`);

getPromise();

console.log(`O código continúa`);

/**
 * REESCRITURA DE UN FETCH (como os da api pokemon) USANDO ASYNC/AWAIT
 *
 */

// FETCH
function imprimirDatos() {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

imprimirDatos();

// ASYNC AWAIT

async function imprimirData() {
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  const datos = await response.json();
  console.log(datos);
}

imprimirData();

/**
 * FUNCIONAMENTO DESTA NOVA DINÁMICA
 */

function resolveAfter2seconds(x) {
  console.log(x);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function addA(x) {
  const a = await resolveAfter2seconds(1);
  const b = await resolveAfter2seconds(2);

  return x + a + b;
}

async function addB(x) {
  const p_a = resolveAfter2seconds(4);
  const p_b = resolveAfter2seconds(5);
  return x + (await p_a) + (await p_b);
}

addA(10).then((v) => {
  console.log(v); // prints 13 after 4 seconds.
});
addB(10).then((v) => {
  console.log(v); // prints 19 after 2 seconds.
});

/**
 * MANEXO DE ERROS
 */

// Con try...catch

const getData = async () => {
  try {
    const response = await fetch("http://httpstat.us/500");
    if (!response.ok) throw new Error("Request Failed");
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData();

//Con .catch
/**
const getData = async () => {
  const response = await fetch("http://httpstat.us/500");
  if (!response.ok) throw new Error("Request Failed");
  const data = await response.text();
  console.log(data);
};
getData().catch((error) => console.log(error));
 */
