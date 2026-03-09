/*const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Bogotá"
};

let nombre = persona.nombre;
let edad = persona.edad;

console.log(nombre);
console.log(edad);
*/
// Con Desestructuración 
const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Bogotá"
};

const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);


// sintaxis de desestructuración con objetos anidados
const usuario = { 
    jondou: { 
    edad2: 28,
    correo : "jondou@example.com"
    }
};

const { jondou: { edad2, correo } } = usuario;

console.log(edad2); // 28
console.log(correo); // "jondou@example.com"

// sintaxis de desestructuración con objetos con arreglos
let a;
let b;

[a, b] = [1, 2];

console.log(a);
console.log(b);

// sintaxis de desestructuracion con el operador rest
let c;
let d;
let e;


[c, d, ...e] = [1, 2, 3, 4, 5, 6, 7];
console.log(c); // 1
console.log(d); // 2
console.log(e); // [3, 4, 5, 6, 7]

// sintaxis de desestructuración pasa objeto como argumento
let nuevoPerfilCliente = {
    nombre: "Carlos",
    edad: 35,
    ciudad: "Lima",
    ubicacion: "Perú"
};

const actualizarPerfil = (informacionDePerfil) => {
    const { nombre, edad, ciudad } = informacionDePerfil;
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
};

actualizarPerfil(nuevoPerfilCliente);