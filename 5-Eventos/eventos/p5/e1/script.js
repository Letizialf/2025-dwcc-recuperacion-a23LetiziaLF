// Dado o seguinte código HTML, observa que o span ten unha clase css “oculto”.

// En primeiro lugar engade a configuración de estilos CSS para a clase “oculto” de tal forma que inicialmente o span estea oculto.

// Ademais, crea o JavaScript necesario para que ao pulsar a ligazón se faga visible o contido do span e desapareza a ligazón.

function expandirTexto() {
  let span = document.getElementById("adicional");

  if (span.style.display == "none") {
    span.style.display = "inline";
  } else {
    span.style.display = "none";
  }
}

let link = document.getElementById("ligazon");
link.addEventListener("click", expandirTexto);
