function cargarUsers() {
  const urlRandomUserGen = "https://randomuser.me/api/";

  let promise = fetch(urlRandomUserGen);

  promise
    .then((response) => {
      console.log(response.ok);
      console.log(response.status);
      const data = response.json();
      return data;
    })
    .then((data) => {
      limparPaxina();
      generarContenido(data);
    });
}
cargarUsers();

//   Función para crear os elementos de forma máis rápida
function crearElementos(pai, elemento, contido) {
  let partePai = document.querySelector(pai);
  let elementoCrear = document.createElement(elemento);
  elementoCrear.textContent = contido;

  partePai.append(elementoCrear);
}

// Función para xerar o contido
function generarContenido(data) {
  obterDatos(data);
}

// Función que recolle os datos e crea os elementos nos que se allmacenará cada elemento
function obterDatos(data) {
  let user = data.results[0];

  // IMAXE
  let imagelink = user.picture.large;
  console.log(imagelink);
  poñerFoto(imagelink);

  // DATOS
  let nameSurname = user.name.first + " " + user.name.last;
  crearElementos("#content", "h1", nameSurname);

  let age = user.registered.age + " years old";
  crearElementos("#content", "h2", age);

  let mail = user.email;
  crearElementos("#content", "h3", mail);

  let phone = user.phone;
  crearElementos("#content", "h4", phone);

  let address = user.location.city + " - " + user.location.country;
  crearElementos("#content", "h4", address);
}

// Función para crear o elemento ca foto
function poñerFoto(link) {
  let divImage = document.getElementById("image");
  let image = document.createElement("img");
  image.src = link;
  divImage.append(image);
}

// Función que limpa a páxina ao xerar outro usuario
function limparPaxina() {
  document.querySelector("#image").innerHTML = "";
  document.querySelector("#content").innerHTML = "";
}

// Evento para que o botón recargue a páxina

let botonRecarga = document.getElementById("recarga");

botonRecarga.addEventListener("click", cargarUsers);
