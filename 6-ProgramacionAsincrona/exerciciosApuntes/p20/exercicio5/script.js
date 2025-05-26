/**
 * Función que crea e devolve unha promesa
 * Cando a promesa se resolve exitosamente devolve, logo de 3s, o parámetro da función
 * @param {*} param
 * @returns
 */
function crearPromesa(param) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(param);
    }, 3000);
  });
}

// Creamos a variable que almacenará a promesa
let promise = crearPromesa(90);

// Consumimos a promesa
promise.then(function (data) {
  console.log(`O parámetro introducido foi: ${data}`);
});
