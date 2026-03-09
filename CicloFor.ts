for (let i: number = 0; i < 5; i++) {
    console.log("Hola mundo");
}


// ciclos for nuemros impares
let miarreglo = [];

for (let i: number = 1; i < 10; i += 2) {
    miarreglo.push(i);

    }
console.log(miarreglo); // [1, 3, 5, 7, 9]

// ciclo for contar hacia atrás
for (let i: number = 10; i > 0; i--) {
    console.log(i);
}   


let frutas = ["Manzana", "Banano", "Uva", "Mango"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//ciclos for anidados
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i:", i, "j:", j);
    }
}

