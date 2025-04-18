"use strict";

// Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada

const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

let flight = flightsInfo.split("+");
console.log(flight);

function formatFlightInfo(cadena) {
  for (const data of flight) {
    let [status, exitAiport, arrivalAirport, hour] = data.split(";"); //Desestructuración
    let formattedStatus = status.replaceAll("_", " ").trim(); // Reemplazamos todas as _ por espacios e eliminamos o 1ro

    function formatCode(code) {
      return code.slice(0, 3).toUpperCase(); // Función para eliminar os números do código de aeropuerto
    }

    //Formateamos os códigos coa función anterior
    let formattedExitAirport = formatCode(exitAiport);
    let formattedArrivalAirport = formatCode(arrivalAirport);

    const output = `${formattedStatus} ${formattedExitAirport} ${formattedArrivalAirport} (${hour.replace(
      ":",
      "h"
    )})`;

    console.log(output.padStart(40)); //Indentación
  }
}

console.log(formatFlightInfo(flightsInfo));
