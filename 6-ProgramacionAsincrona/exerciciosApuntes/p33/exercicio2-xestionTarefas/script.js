function recibirTarefas() {
  const urlApi = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  let promise = fetch(urlApi);

  promise
    .then((response) => {
      console.log(response.ok);
      console.log(response.status);

      let data = response.json();
      return data;
    })
    .then((data) => {
      //   console.log(data);
      listarTarefas(data);
    })
    .catch((error) => {
      handleError(error);
    });
}

recibirTarefas();

function listarTarefas(data) {
  let divResultado = document.querySelector("#tasksContainer");
  let section = document.createElement("section");
  divResultado.append(section);

  // Recorremos o resultado para acceder ó título de cada tarefa
  data.forEach((tarea) => {
    let title = tarea.title;
    //   Creamos un article para cada elemento no que irá o título da tarefa e o botón para poder borrala
    createElementos("section", "article", title);
    createElementos("article:last-child", "button", "Borrar");

    //   Seleccionamos o último article de cada iteracción (será o que se crea en dita iteración)
    let ultArticle = document.querySelector("article:last-child");

    //   Engadimoslles a clase 'completed' para poder traballar con ela despois e o id da tarefa que lle corresponde para que cada tarefa corresponda co seu id
    ultArticle.classList.add(tarea.completed);
    ultArticle.dataset.id = tarea.id;
  });
}

/**
 * Modificar o estado da tarefa
 */
function modificarEstadoTarefa(data) {}

function handleError(error) {
  console.log(`Lo sentimos, ha ocurrido un error en la petición`);
}

function createElementos(pai, elementoCrear, contenido) {
  let partePai = document.querySelector(pai);
  let elemento = document.createElement(elementoCrear);
  elemento.textContent = contenido;

  partePai.append(elemento);
}
