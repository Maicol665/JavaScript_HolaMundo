const Persona = {
    nombre: "Ana",
    presentarse: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }, 
    edad: 28,
    ciudad: "Bogotá"
};

Persona.presentarse();