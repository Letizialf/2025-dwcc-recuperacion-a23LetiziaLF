// Crea unha función chamada numerosEnCadeas que reciba un array de cadeas e devolva un array só coas cadeas que teñen números. Se non hai cadeas con números, debe devolver un array baleiro.

//     numerosEnCadeas(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
//     numerosEnCadeas(["abc", "abc10"]) ➞ ["abc10"]
//     numerosEnCadeas(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
//     numerosEnCadeas(["this is a test", "test1"]) ➞ ["test1"]

function numerosEnCadeas(array) {
  return console.log(array.filter((cadea) => /\d/.test(cadea)));
}
numerosEnCadeas(["1a", "a", "2b", "b"]);
numerosEnCadeas(["abc", "abc10"]);
numerosEnCadeas(["abc", "ab10c", "a10bc", "bcd"]);
numerosEnCadeas(["this is a test", "test1"]);
numerosEnCadeas(["abd", "hola"]);
