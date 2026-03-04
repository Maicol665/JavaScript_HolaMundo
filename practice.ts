let edad: number = 25; 

console.log("Edad:", edad); 

let Nombre: string = "Juan";

console.log("Nombre:", Nombre);

let booleano: boolean = true;
console.log("Booleano:", booleano);

let arreglo: number[] = [1, 2, 3, 4, 5];
console.log("Arreglo:", arreglo);

// Variables sin tipos explícitos
var a ;
var b = 3;
var c = null;
var d;

a = 5;

console.log("Variable a:", a);
console.log("Variable b:", b);
console.log("Variable c:", c);
console.log("Variable d:", d);

// Variables con tipos explícitos
let aa: number;          // declarada pero tipada
let bb = 3;              // TS infiere que es number
let cc: number | null = null;  // puede ser número o null
let dd: string;          // declarada pero tipada

aa = 5;


console.log("Variable aa:", aa); // undefined
console.log("Variable bb:", bb);
console.log("Variable cc:", cc); // null
console.log("Variable dd:", dd); // undefined



export {};




