// BOTÓN START
let startButton = document.getElementById("start");
let titulo = document.getElementById("title");

// Declaramos esto aquí para poder logo pasalo á función para deter o intervalo
let intervalID;

// function startInterval() {
//   intervalID = setInterval(() => {
//     if (titulo.style.color === "black") {
//       titulo.style.color = "blue";
//     } else titulo.style.color = "black";
//   }, 1000);
// }

/** OUTRA FORMA */
function startInterval() {
  intervalID = setInterval(() => {
    if (titulo.classList.contains("firstColor")) {
      titulo.classList.remove("firstColor");
      titulo.classList.add("secondColor");
    } else if (titulo.classList.contains("secondColor")) {
      titulo.classList.remove("secondColor");
      titulo.classList.add("firstColor");
    } else {
      titulo.classList.add("firstColor");
    }
  }, 1000);
}

startButton.addEventListener("click", startInterval);

// BOTÓN STOP
let stopButton = document.getElementById("stop");

function stopInterval() {
  clearInterval(intervalID);
}

stopButton.addEventListener("click", stopInterval);
