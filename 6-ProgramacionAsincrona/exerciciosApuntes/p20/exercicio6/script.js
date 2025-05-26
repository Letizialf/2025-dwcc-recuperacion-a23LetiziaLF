function crearPromesa(param) {
  return new Promise(function (resolve, reject) {
    if (isNaN(param) || typeof param != "number") {
      reject("Erro. O parámetro introducido debe de ser un número");
    } else if (param % 2 == 0) {
      setTimeout(() => {
        reject(`${param} é "par"`);
      }, 2000);
    } else if (param % 2 == 1) {
      setTimeout(() => {
        resolve(`${param} é "impar"`);
      }, 1000);
    }
  });
}

let promise = crearPromesa(6);

promise
  .then((data) => {
    console.log(data);
    return promise;
  })
  .catch((data) => {
    console.log(data);
  });
