// Una variable es un espacio de almacenamiento para datos que pueden cambiar durante la ejecución de un programa. En muchos lenguajes de programación, las variables se utilizan para almacenar valores como números, texto, objetos, etc.
// En JavaScript, puedes declarar una variable utilizando las palabras clave var, let o const. Por ejemplo:

var miVariable = "Quiero aprender JavaScript!";
console.log(miVariable); // Imprime: Hola, mundo!

// 1️ String (Texto)
let texto = "Hola, estoy aprendiendo JavaScript";
console.log("String:", texto);

// 2️ Number (Número)
let numero = 25;
console.log("Number:", numero);

// 3️ Boolean (Verdadero / Falso)
let esMayorDeEdad = true;
console.log("Boolean:", esMayorDeEdad);

// 4️ Undefined (No tiene valor asignado)
let sinValor;
console.log("Undefined:", sinValor);

// 5️ Null (Valor vacío intencional)
let vacio = null;
console.log("Null:", vacio);

// 6️ Array (Lista de valores)
let frutas = ["manzana", "banana", "pera"];
console.log("Array:", frutas);

// 7️ Object (Objeto)
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
};
console.log("Object:", persona);

// 8️ BigInt (Números muy grandes)
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log("BigInt:", numeroGrande);

// 9️ Symbol (Valor único)
let simboloUnico = Symbol("miSimbolo");
console.log("Symbol:", simboloUnico);
