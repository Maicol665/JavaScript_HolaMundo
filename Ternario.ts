// ternario 
function retornarMinimo(x, y) {
   return x < y ? x : y; 
}

console.log(retornarMinimo(5, 10)); // Devuelve 5


// Ternario anidado para encontrar el número mayor entre tres números
function numeroMayor(a, b, c) {
    return a > b 
        ? (a > c ? a : c) 
        : (b > c ? b : c);
}

console.log(numeroMayor(4, 9, 7)); // Devuelve 9

let campista = "Juan";
 campista = "Pedro";

console.log(campista);










for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // Error: i no está definido fuera del bloque del ciclo for


