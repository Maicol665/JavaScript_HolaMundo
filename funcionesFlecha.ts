// funcion normal
/*function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 5));
*/
// funcion flecha

const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(3, 5));


// funcion flecha con una sola expresión
const sumarTres = function (x) => x + 3;


console.log(sumarTres(4)); // Devuelve 10


// funcion flecha con un solo parámetro
/*
const concatenar = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(concatenar([1, 2], [3, 4, 5]));
*/

const concatenar = function(arr1, arr2)  => 
 arr1.concat(arr2);


console.log(concatenar([1, 2], [3, 4, 5]));

// operador rest 
function sumar(...numeros) {
  return numeros;
}

console.log(sumar(1, 2, 3, 4)); // Devuelve [1, 2, 3, 4]

// operador spread
function multiplicar(a, b, c) {
    return a * b * c;
}