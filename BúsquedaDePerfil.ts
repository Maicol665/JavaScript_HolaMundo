let Contactos = [
    { nombre: "Juan", apellido: "Pérez", edad: 25, gustos: ["fútbol", "música"] },
    { nombre: "María", apellido: "González", edad: 30, gustos: ["lectura", "cine"] },
    { nombre: "Pedro", apellido: "Rodríguez", edad: 20, gustos: ["viajes", "deportes"] },
    { nombre: "Ana", apellido: "López", edad: 28, gustos: ["pintura", "música"] }
];


function BuscarPerfil(nombre, propiedad)  {
    for (let z= 0; z < Contactos.length; z++) {
        if  (Contactos[z].nombre === nombre) {
            return Contactos[z][propiedad] || "Propiedad no encontrada";
        }
    }
    return "Perfil no encontrado";

}

console.log(BuscarPerfil("Juanes", "edad",));
console.log(BuscarPerfil("María", "gustos"));