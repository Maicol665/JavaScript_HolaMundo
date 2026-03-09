/* plantillas literales o plantillas de cadenas 
características:
- Permiten incluir variables y expresiones dentro de cadenas de texto utilizando la sintaxis ${}.
- Se delimitan con comillas invertidas (backticks) en lugar de comillas simples o dobles.
- Facilitan la creación de cadenas multilínea sin necesidad de caracteres de escape.
- Mejoran la legibilidad del código al permitir una sintaxis más clara para la interpolación de variables y expresiones.

*/

// Ejemplo de uso de plantillas literales
let nombres = "Juan";
let cadena = 6;
let Arreglos = [1, 2, 3, 4];

console.log(`El valor de la cadena es: ${cadena}`); // El valor de la cadena es: 6
console.log(`Hola, ${nombres}!`); // Hola, Juan!
console.log(`El arreglo es: ${JSON.stringify(Arreglos)}`); // El arreglo es: 1,2,3,4

