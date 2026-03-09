// crear objetos de forma mas consisa
/*
const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona("Juan", 25, "Español"));
*/
// forma mas consisa 

const crearPersona = (nombre, edad, idioma) => ( {nombre, edad, idioma} );

console.log(crearPersona("Juan", 25, "Español"));
