"use strict";
// Crea unha función denominada isPalidrome que reciba como parámetro un string e devolva true se é un palíndromo e false en caso contrario.

function isPalindrome(phrase) {
  let arrayTexto = phrase.split(""); //Separamos a frase para que cada caracter sexa un elemento do array
  let arrayInverso = arrayTexto.reverse(); // Damoslle a volta ao array (poñemos a frase de dereita a esquerda)

  if (arrayInverso == arrayTexto) {
    //Se son inguais ambos arrays é un palíndromo
    console.log(`"${phrase}" es un palíndromo`);
  } else {
    console.log(`"${phrase}" no es un palíndromo`);
  }
}

isPalindrome("Anita lava la tina");
isPalindrome("mariano");
