// 1. Implementa unha función 'escribirNumeros(desde, ata) que xere un número cada segundo empezando en 'desde' e acabando en 'ata'

// INTERVAL
function escribirNumerosInterval(dende, ata) {
  let intervalId = setInterval(
    () => {
      if (dende <= ata) {
        console.log(dende);
        if (dende == ata) clearInterval(intervalId);
        else dende += 1;
      }
    },
    1000,
    dende,
    ata
  );
}

escribirNumerosInterval(1, 10);

// TIMEOUT
function escribirNumerosTimer(dende, ata) {
  function imprimirNumero() {
    console.log(dende);
    dende++;
    if (dende <= ata) {
      setTimeout(imprimirNumero, 1000);
    }
  }
  imprimirNumero();
}

escribirNumerosTimer(2, 12);
