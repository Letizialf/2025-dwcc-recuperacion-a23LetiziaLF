async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 10;
}
function imprimirResultado() {
  // Recorda, aquí non se pode usar "await"
  // ¿que escribir aquí?

  let resultado = wait();

  resultado.then((data) => {
    console.log(data);
  });
}
imprimirResultado();
