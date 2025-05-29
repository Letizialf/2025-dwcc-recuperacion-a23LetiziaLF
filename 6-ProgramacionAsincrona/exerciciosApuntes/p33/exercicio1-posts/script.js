/**
 * Collemos o valor do input e executamos a función que realiza o fetch pasando o valor de dito elemento
 */
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userId = document.getElementById("idUser").value;
    clearResults();
    facerPeticion(userId);
  });

function clearResults() {
  document.getElementById("posts").innerHTML = "";
}

/**
 * REQUEST
 */
function facerPeticion(userId) {
  // Para que a URL que se usa para a petición utilice o id especificado no input, hai que pasarllo como parámetro
  const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  let promise = fetch(apiUrl);

  promise
    .then((response) => {
      console.log(response.status);
      console.log(response.ok);

      const data = response.json();
      return data;
    })
    .then((data) => {
      mostrarPosts(data);
    })
    .catch((error) => {
      handleError(error);
    });
}

function mostrarPosts(data) {
  let divInfo = document.getElementById("posts");

  if (posts.length === 0) {
    divInfo.innerText =
      "<p>Lo sentimos, el usuario pedido no ha publicado ningún post</p>";
    return;
  }

  const tablaPosts = crearTabla(data);
  divInfo.append(tablaPosts);
}

/**
 * CREACIÓN DA TABLA
 */

function crearTabla(posts) {
  const table = document.createElement("table");
  let thead = crearHeader(["ID", "TÍTULO", "INFORMACIÓN"]);
  table.append(thead);

  let tbody = document.createElement("tbody");
  posts.forEach((post) => {
    let fila = crearFila([post.id, post.title, post.body]);
    tbody.appendChild(fila);
  });
  table.append(tbody);
  return table;
}
// Crear headers da tabla
function crearHeader(headers) {
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");

  headers.forEach((texto) => {
    let th = document.createElement("th");
    th.innerText = texto;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  return thead;
}

// Crear filas da tabla
function crearFila(values) {
  const row = document.createElement("tr");
  values.forEach((value) => {
    let celda = document.createElement("td");
    celda.innerText = value;
    row.appendChild(celda);
  });
  return row;
}
/**
 * Esta función lanza unha mensaxe de erro personalizada se ocorrese algo durante a petición
 */
function handleError(error) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    "<p>Erro ao cargar os datos. Tente de novo máis tarde.</p>";
  console.error("Erro:", error);
}
