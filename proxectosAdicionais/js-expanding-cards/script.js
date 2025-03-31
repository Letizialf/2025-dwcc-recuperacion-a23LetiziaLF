function expandirPanel(event) {
  // Seleccionamos todos os paneles e engadimos un event listener para que se se fai click se engada a clase 'active'
  let paneles = document.querySelectorAll(".panel");
  paneles.forEach((panel) => {
    panel.addEventListener("click", () => {
      // Eliminamos a clase active do panel que a conteña
      removeActive(paneles);
      // Engadimos a clase active ao panel no que se fixo click
      panel.classList.add("active");
    });
  });
}

// Función para eliminar active do panel que a conteña
function removeActive(paneles) {
  paneles.forEach((panel) => {
    panel.classList.remove("active");
  });
}

expandirPanel();
