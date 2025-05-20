// SET TIME OUT -------------------------------------------------------------------------------------------------------------------------------------
// Recibe como parámetros unha función de callback e o tempo (en milisegundos) que TARDARÁ en empezar a executarse dita función

/**
 * Logo de 10 segundos aparecerá esta mensaxe por pantalla
 */
setTimeout(() => {
  console.log("This is the first message");
}, 4000);

// Tamén se lle poden pasar parámetros á función de callback
setTimeout(
  (p1, p2) => {
    console.log(`Parámetros: ${p1}, ${p2}`);
  },
  5000,
  "texto",
  7
);

// O método setTimeOut() devolve un número enteiro que serve para identificar o temporizador.
// Este elemento pode pasarse a clearTimeOut() para cancelar o temporizador
const timeOutId = setTimeout(() => {
  console.log("This is the timeOut that we are going to clear");
}, 3000);

clearTimeout(timeOutId); //De esta forma non se executa o temporizador

// SET INTERVAL -------------------------------------------------------------------------------------------------------------------------------------
// Permite executar unha función de forma reiterada a intervalos constantes de tempo (especificado polo programador)

/**
 * Esta función chamará a myCallback cada 6 segundos, e amosará AMBAS mensaxes cada ese tempo
 */
const intervalId = setInterval(myCallback, 6000, "intervalos", 3);

function myCallback(a, b) {
  console.log(`Primer parámetro: ${a}`);
  console.log(`Segundo parámetro: ${b}`);
}

clearInterval(intervalId);
