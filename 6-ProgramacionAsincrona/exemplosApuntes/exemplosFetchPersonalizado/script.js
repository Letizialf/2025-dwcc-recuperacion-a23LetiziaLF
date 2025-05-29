// Ata agora, o método utilizado para facer as requests era 'GET' pero, se quixésemos utilizar outro método (POST, PUT, PATCH, DELETE...) teríamos que especificalo no segundo parámetro de fetch(url, OPTIONS)

// Para estes exemplos utilizarase unha API que nos permite SIMULAR o funcionamento destas instruccións sen modificar realmente a base de datos da API

function createPost(post) {
  let options = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const myRequest = new Request(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
createPost({ userId: 1, title: "My Post", body: "This is my Post" });
