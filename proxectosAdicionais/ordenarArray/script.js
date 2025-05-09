// Crea unha función chamada ordenarArray que reciba un array de obxectos e unha propiedade do obxecto. A función debe devolver un array onde os obxectos estean ordenados polo valor da propiedade pasada como segundo parámetro:

// ordenarArray([{a:1,b:2},{a:5,b:4}], “b”) -> [{a:1,b:2},{a:5,b:4}]
// ordenarArray([{a:2,b:10},{a:5,b:4}], “b”) -> [{a:5,b:4},{a:2,b:10}]
// ordenarArray([{a:1,b:7},{a:2,b:1}], “b”) -> [{a:2,b:1},{a:1,b:7}]

function ordenarArray(cadena, propiedad) {
  return cadena.slice().sort((a, b) => a[propiedad] - b[propiedad]);
}

console.log(
  ordenarArray(
    [
      { a: 1, b: 2 },
      { a: 5, b: 4 },
    ],
    "b"
  )
);

console.log(
  ordenarArray(
    [
      { a: 2, b: 10 },
      { a: 5, b: 4 },
    ],
    "b"
  )
);

console.log(
  ordenarArray(
    [
      { a: 1, b: 7 },
      { a: 2, b: 1 },
    ],
    "b"
  )
);
