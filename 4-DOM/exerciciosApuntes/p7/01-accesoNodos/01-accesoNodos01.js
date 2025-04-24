'use strict';

//  Indica, polo menos, unha forma de acceder aos seguintes nodos utilizando os métodos de acceso a nodos

// Táboa con id='age-table'
let table = document.getElementById('age-table');
console.log(table);
// Todos os elementos label dentro da táboa (3)
let labels = table.querySelectorAll('label');
console.log(labels);
// O primeiro td da táboa
let firstTd = table.querySelector('td');
console.log(firstTd);
// O formulario con name="search"
let searchForm = document.querySelector('form[name="search"');
console.log(searchForm);

// ///// OUTRA FORMA
let formulario = document.getElementsByTagName('form');
let namedForm = formulario.namedItem('search');
console.log(namedForm);
// O primeiro input do formulario anterior
let firstInput = document.querySelector(
  'body > form:nth-child(1) > label > input[type=text]'
);
console.log(firstInput);

// O último input do formulario
let lastInput = document.querySelector(
  'body > form:nth-child(1) > input[type=submit]'
);
console.log(lastInput);
