// 1️⃣ String (Texto)
let texto: string = "Hola, estoy aprendiendo JavaScript";
console.log("String:", texto);

// 2️⃣ Number (Número)
let numero: number = 25;
console.log("Number:", numero);

// 3️⃣ Boolean (Verdadero / Falso)
let esMayorDeEdad: boolean = true;
console.log("Boolean:", esMayorDeEdad);

// 4️⃣ Undefined
let sinValor: undefined = undefined;
console.log("Undefined:", sinValor);

// 5️⃣ Null
let vacio: null = null;
console.log("Null:", vacio);

// 6️⃣ Array (Lista de valores)
let frutas: string[] = ["manzana", "banana", "pera"];
console.log("Array:", frutas);

// Otra forma de declarar array
let numeros: Array<number> = [1, 2, 3];
console.log("Array<number>:", numeros);

// 7️⃣ Object (Objeto con tipos definidos)
let persona: { nombre: string; edad: number; ciudad: string } = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
};
console.log("Object:", persona);

// 8️⃣ BigInt
let numeroGrande: bigint = 1234567890123456789012345678901234567890n;
console.log("BigInt:", numeroGrande);

// 9️⃣ Symbol
let simboloUnico: symbol = Symbol("miSimbolo");
console.log("Symbol:", simboloUnico);