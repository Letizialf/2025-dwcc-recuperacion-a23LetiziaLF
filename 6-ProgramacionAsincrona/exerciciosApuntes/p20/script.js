//  1. ¿Son iguais os seguintes fragmentos de código? ¿Que pasa se se produce un erro
// en f1?
// */
// promise.then(f1).catch(f2);
// Se, neste caso, se lanza un erro en f1, o catch recolleríao e executaríase f2.
// promise.then(f1, f2);
//Sen embargo, se neste caso, f1 lanza un erro, f2 non se chega a executar porque non recolle os erros ocasionados en f1, só recolle os erros de promise
//Lanzaríase un error por consola
//NON SON IGUAIS.

/**
 * 2. Cal é a saídado seguinte código?
 */

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }
// let promise = job();
// promise
//   .then(() => console.log("Success 1"))
//   .then(() => console.log("Success 2"))
//   .then(() => console.log("Success 3"))
//   .catch(() => console.log("Error 1"))
//   .then(() => console.log("Success 4"));

let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);
