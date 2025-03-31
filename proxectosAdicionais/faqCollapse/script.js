function añadirActive() {
  botones = document.querySelectorAll(".faq-toggle");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      boton.closest("div").classList.toggle("active");
    });
  });
}

añadirActive();
