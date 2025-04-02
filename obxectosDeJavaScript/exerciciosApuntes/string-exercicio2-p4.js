"use string";
// Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido inverso

let stringAProbar = "Buenos días mundo cruel";

function reverseStringManual(cadea) {
  let cadeaFinal = "";
  for (let i = cadea.length; i >= 0; i--) {
    cadeaFinal += cadea.charAt(i);
  }
  return cadeaFinal;
}
console.log(reverseStringManual(stringAProbar));
