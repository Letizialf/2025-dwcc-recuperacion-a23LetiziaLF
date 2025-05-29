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

/**
 * Mostrar as tarefas e o seu estado na páxina
 * @param {*} data
 */
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

  // EventListener para poder modificar o estado das tarefas
  section.addEventListener("click", modificarEstadoTarefa);
}

/**
 * Engadir tarefas
 * Esta función será chamada cando o evento 'click' no botón engadirTarefa suceda
 */
function engadirTarefa(event) {
  // Facemos esto para que cando fagamos click en 'engadir tarefa' non se envíe directamente e se borre a información
  event.preventDefault();

  let textoTarefa = document.getElementById("novatarefa").value;

  createElementos("section", "article", textoTarefa);
  createElementos("article:last-child", "button", "Borrar");

  let tarefa = document.querySelector("article:last-child");
  tarefa.classList.add("false");

  let randomId = Math.floor(Math.random() * 1000);
  tarefa.dataset.id = randomId;
  engadirTarefaApi(textoTarefa);

  // Aquí falta engadir o eventListener ao botón de borrado para facelo funcional, hai que engadilo cando se faga a función para borrar
  let botonBorrado = document.querySelector("article:last-child > button");
  botonBorrado.addEventListener("click", borrarTarefa);
}

/**
 * Engadir esa tarefa na API---- post
 * Esta función executámola en 'engadirTarefa' pasándolle como parámetro o título
 * IMPORTANTE: Executala logo de engadir as clases e o id á nova tarefa
 */
function engadirTarefaApi(titulo) {
  // Para poder facer un post primeiro temos que crear o obxecto que queremos enviar
  let novatarefa = {
    userId: 1,
    title: titulo,
    completed: false,
  };

  // Unha vez creado o obxecto coas propiedades necesarias, facemos o post pasando o obxecto options con todas as opcións necesarias para que funcione

  let promisePost = fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(novatarefa),
    headers: { "Content-Type": "application/json" },
  });

  promisePost
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data); //Se se imprime a info da nova tarefa é porque está funcionando o post
      document.querySelector("#novatarefa").value = ""; //Limpa o input
    })
    .catch((error) => {
      handleError(error);
    });
}

/**
 * Engadimos o eventListener ao botón para poder engadir tarefas á lista
 */
let botonEngadir = document.getElementById("engadirTarefa");
botonEngadir.addEventListener("click", engadirTarefa);

/**
 * Modificar o estado da tarefa no DOM
 */
function modificarEstadoTarefa(event) {
  // Para modificar o estado da tarefa temos que cambiar a class de true a false ou viceversa
  let target = event.target;

  // Comprobamos que se fixo click nun article
  if (target.tagName === "ARTICLE") {
    if (target.classList.contains("true")) {
      target.classList.remove("true");
      target.classList.add("false");
    } else if (target.classList.contains("false")) {
      target.classList.remove("false");
      target.classList.add("true");
    }
  }

  let idTarefa = target.dataset.id;
  let novoEstado = target.classList.contains("true");

  modificarEstadoApi(idTarefa, novoEstado);
}

/**
 * Actualizar o estado da tarefa na API
 * Esto faise con un PATCH
 * Ten que recibir o id da tarefa que queremos modificar e o novo valor da propieade que queremos modificar
 * Función chamada en 'modificarEstadoTarefa
 */
function modificarEstadoApi(idTarefa, novoEstado) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${idTarefa}`, {
    method: "PATCH",
    body: JSON.stringify({
      completed: novoEstado,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Estado actualizado na API: ", data);
    })
    .catch((error) => {
      console.error("Error ao actualizar o estado na API", error);
    });
}

/**
 * BORRAR TAREFAS
 * Para borrar as terefas da Api teremos que facer outro fetch, pero primeiro imos encargarnos de modificar o DOM
 */
function borrarTarefa(event) {
  let boton = event.target;

  if (boton.tagName === "BUTTON") {
    const confirmation = confirm("¿Estás seguro de eliminar ese elemento?");
    if (confirmation) {
      const articleTarefa = event.target.closest("article");
      // Eliminar el elemento del DOM
      articleTarefa.remove();
      //Eliminar elemento da API
      let id = boton.dataset.id;
      borrarTarefaApi(id);
    }
  }
}

function borrarTarefaApi(idTarefa) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${idTarefa}`, {
    method: "DELETE",
  }).catch((error) => {
    console.error("Error ao ELIMINAR a tarefa na API", error);
  });
}

/**
 * Función que manexa os erros ocorridos durante a request
 * @param {*} error
 */
function handleError(error) {
  console.log(`Lo sentimos, ha ocurrido un error en la petición`);
}

/**
 * Función para axilizar a creación de elementos no DOM
 * @param {*} pai
 * @param {*} elementoCrear
 * @param {*} contenido
 */
function createElementos(pai, elementoCrear, contenido) {
  let partePai = document.querySelector(pai);
  let elemento = document.createElement(elementoCrear);
  elemento.textContent = contenido;

  partePai.append(elemento);
}
