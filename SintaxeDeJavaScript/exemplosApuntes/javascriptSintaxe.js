"use strict";

console.log("Exemplos p10---Amosar Información");
console.log(34); //Podemos amosar un valor

let myVar = "Hi (Variable)";
console.log(myVar); //Podemos amosar unha variable

// Mensaxes de texto, error ou aviso
console.log("Mensaxe de texto normal e corriente");
console.error("Mensaxe de erro con console.error");
console.warn("Aviso con console.warn");

// Podemos tamén imprimir por consola unha tabla
console.table(["apples", "oranges", "strawberries"]);

// Podemos amosar un obxecto ou acceder a unha propiedade en concreto
let obj = {
  name: "Lana",
};
console.log(obj);
console.log(`Acceso a unha propiedade dun obxecto: ${obj.name}`);

// -------------------------------------------------------

console.log("Exemplos --- Variables");

// Podemos declarar variables de varias formas:
// -- var: variable en ámbito de función ou no contexto no que se declare. NON CREA UNHA NOVA VARIABLE --> CREA UNHA NOBA PROPIEDADE DO OBXECTO GLOBAL
console.log("---------------Exemplos de var:");

var y = 3;
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // Imprime 1 xa que a variable x é accesible dentro de foo, polo que tamén dentro de bar
    x = 11; // Cambia o valor da variable, sobreescribímola
    console.log(y); // Imprimimos y pero amosarase a que se declarou no ámbito da función xa que é a que máis cerca está
  }

  bar(); // Execútase bar()
  console.log(x); // Volvemos a imprimir x, pero esta vez mostrará 11 porque se reescribeu a variable
  console.log(y); // Volvemos a imprimir y, pero esta vez amosarase a que está declarada no ámbito global xa que a que está dentro de bar() non é accesible fóra dese ámbito
}
foo(); // Execútase foo()

// -- const: declara unha variable de solo lectura e ámbito de bloque (espacio delimitado polos corchetes {} )
// As constantes:
// - Almacenan valores que non cambian
// - Non poden ser redeclaradas
// - Deben inicializarse ao declararse
// - Non deben cambiar o seu valor
// - Se referencian a un obxecto ou array podemos cambiar as súas propiedades

// Estas variables almacenan, en realidade, unha referencia de solo lectura a un valor, non o valor en sí mesmo.
console.log("---------------Exemplos de const:");

const PI = 3.1415;
console.log(PI);

// Exemplo con arrays
const numeros = [1, 3, 4];
console.log(numeros);

numeros[3] = 5; //Engadimos na posición 3 un novo valor
console.log(numeros);

// Exemplo con obxectos
const person = {
  //Declaramos o obxecto
  name: "Ada",
};
console.log(person); //Amosamos o obxecto

person.name = "María"; //Cambiamoslle o valor á propiedade name
console.log(person);

// -- let: declara unha variable no ámbito de bloque (dentro dos {} ) que pode ser reescrita.
// - Unha variable no ámbito de bloque non pode ser accedida dende fora do contexto
console.log("---------------Exemplos de let:");

let x = 1; //Declaramos a variable
if (x === 1) {
  let x = 2; //Redeclarámmola DENTRO DO BLOQUE se cumple coa condición
  console.log(x); // 2: Variable de dentro do bloque
}
console.log(x); // 1: Variable fora do bloque

//----------------TIPOS DE DATOS-----------------------------------
// Hai 8 tipos de datos, 7 primitivos e Object:
//
// - OBJECT: Todos os valores que non son considerados dun tipo primitivo son obxectos

// - PRIMITIVOS
// -- Booleano: é un tipo de datos lóxico que devolve TRUE ou FALSE.

// -- Number: é un tipo de dato numérico.
// ----NaN: é un número especial que representa un número inválido, aparece cando o resultado dunha operación aritmética non pode expresarse como un número.

// -- BigInt: é un tipo de dato numérico que aparece para representar números míores dos que se poden representar con Number, para crear un BigInt podemos engadir unha 'n' despois do número ou chamar ó constructor.

// -- String: é unha secuencia de caracteres usada para representar texto. As cadeas deben de representarse entre aspas (comillas) dobres ou simples pero recoméndase utilizar sempre as mesmas para maior coherencia no código.

// -- Undefined: é o valor que se lle asigna automáticamente a unha variable que solo foi inicializada sen establecer ningún valor.

// -- Null: palabra clave que denota a ausencia de valor ou 'vacío'. Indica que a variable non apunta a ningún obxecto.

// -- Symbol: tipo de dato que garante que a súa instancia é única e inmutable. Normalmente úsanse como chaves de propiedades únicas dun obxecto, para que sexan distintas ás de calquera outro obxecto.

// Todos os tipos primitivos excepto null e undefined teñen un Object correspondente ao que se lle denomina Wrapper, este obxecto proporciónanos métodos útiles para traballar con estos datos.
console.log("---------Exemplos de TIPOS de DATOS: ---------------");

console.log("Ada", typeof "Ada");
console.log(23, typeof 23);
console.log(8.5, typeof 8.5);
console.log(true, typeof true);
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(Symbol("id"), typeof Symbol("id"));
console.log(9007199254740991n, typeof 9007199254740991n);
console.log([1, 2, 3, 4], typeof [1, 2, 3, 4]);
console.log({ name: "Ada" }, typeof { name: "Ada" });
function sayHello() {
  console.log("Hello");
}
console.log(sayHello, typeof sayHello);

// Os tipos primitivos e os obxectos tamén se referencian por como se almacenan na memoria.
// Mentres os tipos primitivos se almacenan directamente na pila (stack), os obxectos almacénanse no montículo (heap) ao que se accede mediante a referencia.
// Ao asignar un obxecto a outro, o que sucede realmente é que se lle asigna a dirección de memoria

console.log("--------------Exemplo de referenciación con obxectos");
let a = {
  name: "John",
  age: 22,
};

let b = a;
b.name = "Mark";

console.log("a -> ", a);
console.log("b -> ", b);

// CONVERSIÓN DE TIPOS ---------------------------------------------
// A conversión pode suceder de 2 formas, explicitamente (de forma manual cambiamos o tipo de dato dunha variable) ou implícitamente (a propia linguaxe de programación parsea os tipos de datos para conseguir resolver unha situación)

// Na conversión explícita somos nós os que cambiamos os tipos dos datos de forma manual para poder realizar certas funcións.

// Na conversión implícita é JavaScript o que decide qué datos cambian o seu tipo según o que él considere para que a operación funcione (independentemente do resultado que nós esperemos), por exemplo:

// O operador '+' sirve para sumar ou para concatenar cadeas de caracteres:
// - Se un dos operandos é un String converte o outro operandoa String e concatena ambas cadeas
// - No caso contrario, os operandos son convertidos a Number e fai a operación matemática
console.log(5 + null); // devolve 5 porque null é convertido a Number (null = 0)
console.log("5" + null); // devolve '5null' porque null é convertido a String
console.log("5" + 2); // devolve '52' porque 2 é convertido a String
console.log("5" - 2); // devolve 3 porque '5' é convertido a Number
console.log("5" * "2"); // devolve 10 porque '5' e '2' son convertidos a Number

// OPERADORES ------------------------------------------------------
// Hai varios tipos de operadores:
// - Operadores de asignación: asignan un valor ao operando do lado esquerdo baseándose no operando do lado dereito.
// -- =, +=, -=. %=, *=, **=, /=...

// - Operadores aritméticos: realizan operacións aritméticas
// -- +, -, *, /, %, **, ++, -- ...

// - Operadores de cadeas: concatenan cadeas
// -- +, +=

// Operadores de comparación: comparan os operandos entre si e devolven un valor booleano basado na comparación
// -- ===, !==, ==, !=, <, >, =<, >=, ?

// Os operadores teñen orde de precedencia, polo que se queremos utilizar varios nunha misma función, debemos ter en conta que o operador de maior precedencia se executará primeiro
console.log(3 + 10 * 2); // mostra 23

// ESTRUTURAS DE CONTROL -------------------------------------------
