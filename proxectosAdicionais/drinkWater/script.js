const smallCups = document.querySelectorAll(".cup-small"); //Seleccionamos todos os vasos peq
const remain = document.getElementById("remained"); // Seleccionamos o div (litros que faltan por beber) que se fará visible cando se marque o primeiro vaso
const liters = document.getElementById("liters"); // Seleccionamos o div (litros bebidos) para modificalo cando se cambien
const percentage = document.getElementById("percentage"); // Seleccionamos este elemento para cambialo a medida que vai cambiando a cantidade de auga bebida

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => refillCups(index));
});

function refillCups(index) {
  if (smallCups[index].classList.contains("full")) {
    index--;
  } else if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  // ACTUALIZAR OS VALORES DO VASO GRANDE ???
  fillBigCup();
}

function fillBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const total = smallCups.length;

  // Actualizamos os porcentajes
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / total) * 330}px`; // Copiado da solución
    percentage.innerText = `${(fullCups / total) * 100}%`;
  }

  // Actualizamos os litros
  if (fullCups === total) {
    remain.style.visibility = "hidden";
    remain.style.height = 0;
  } else {
    remain.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`; //Copiado da solución
  }
}
